import { Application, Text } from 'https://cdn.jsdelivr.net/npm/pixi.js@8.2.2/dist/pixi.mjs';

window.onload = async () => {

    const width = window.innerWidth;
    const height = window.innerHeight

    const app = new Application();
    await app.init({
        width,
        height,
        backgroundColor: 0x1e1e1e,
        webgl: { antialias: true },
        webgpu: { antialias: false },
    });

    document.documentElement.style.height = '100%';
    document.body.style.height = '100%';
    document.body.style.margin = '0';
    document.body.style.overflow = 'hidden';
    app.canvas.style.display = 'block';
    document.body.appendChild(app.canvas);

    const text = new Text('D20 Dice Field', {
        fill: '#ffffff',
        fontSize: 36,
    });
    text.anchor.set(0.5);
    text.x = app.canvas.width / 2;
    text.y = 60;
    app.stage.addChild(text);

    // Resize window
    window.addEventListener('resize', () => {
        const newWidth = window.innerWidth;
        const newHeight = window.innerHeight;

        app.renderer.resize(newWidth, newHeight);
        text.x = newWidth / 2;
    });
};