// Copyright (C) 2020 Intel Corporation
//
// SPDX-License-Identifier: MIT

// eslint-disable-next-line
exports.imageGenerator = imageGenerator;

const jimp = require('jimp');
const path = require('path');

function imageGenerator(args) {
    const directory = args.directory;
    const fileName = args.fileName;
    const width = args.width;
    const height = args.height;
    const color = args.color;
    const posX = args.posX;
    const posY = args.posY;
    const message = args.message;
    const file = path.join(directory, fileName);
    return new Promise((resolve, reject) => {
        // eslint-disable-next-line no-unused-vars
        const image = new jimp(width, height, color, function (err, image) {
            if (err) reject(err);
            jimp.loadFont(jimp.FONT_SANS_64_BLACK, function (err, font) {
                if (err) reject(err);
                image.print(font, Number(posX), Number(posY), message).write(file);
            });
        });
        setTimeout(() => resolve(null), '1000');
    });
}
