// Основной модуль
import gulp from "gulp";

// Импорт плагинов
import { plugins } from "./gulp/config/plugins.js";

// Импорт путей
import { path } from "./gulp/config/path.js";

// Глобальные переменные
global.app = {
  isBuild: process.argv.includes("--build"),
  isDev: !process.argv.includes("--build"),
  path: path,
  gulp: gulp,
  plugins: plugins,
};

// Импорт задач
import { reset } from "./gulp/tasks/reset.js";
import { copy } from "./gulp/tasks/copy.js";
// import { copyicons } from "./gulp/tasks/copyicons.js";
import { copyfonts } from "./gulp/tasks/copyfonts.js";
import { html } from "./gulp/tasks/html.js";
import { scss } from "./gulp/tasks/scss.js";
import { js } from "./gulp/tasks/js.js";
import { server } from "./gulp/tasks/server.js";

// Импорт задач по изображениям
import {
  imgAvif,
  imgWebp,
  imgImage,
  imgOriginals,
  imgStatic,
} from "./gulp/tasks/images.js";

// Если используешь SVG-спрайты или шрифты:
// import { svgStack, svgSymbol } from "./gulp/tasks/svg.js";
// import { OtfToTtf, ttfToWoff, fontStyle } from "./gulp/tasks/fonts.js";

// Наблюдатель
function watcher() {
  gulp.watch(path.watch.files, copy);
  gulp.watch(path.watch.html, html);
  gulp.watch(path.watch.scss, scss);
  gulp.watch(path.watch.js, js);
  gulp.watch(path.watch.images, images);
  // gulp.watch(path.watch.icons, copyicons);
  // gulp.watch(path.watch.sprite, gulp.series(svgStack, svgSymbol));
}

// Задача по изображениям
const images = gulp.series(
  imgStatic, // копируем статичные изображения без обработки
  imgOriginals, // копируем convert-оригиналы
  imgImage, // сжимаем convert
  gulp.parallel(imgWebp, imgAvif) // генерируем webp и avif параллельно
);

// Основные задачи
const mainTasks = gulp.series(
  gulp.parallel(copy, copyfonts, html, scss, js, images)
);

// Сценарии
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
const build = gulp.series(reset, mainTasks);

// Экспорт сценариев
export { dev };
export { build };

// Задача по умолчанию
gulp.task("default", dev);
