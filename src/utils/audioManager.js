let audio = null;

export const playMusic = (src, volume = 0.5) => {
    try {
        // stop previous music
        if (audio) {
            audio.pause();
            audio.currentTime = 0;
        }

        audio = new Audio(src);
        audio.loop = true;
        audio.volume = volume;

        audio.play().catch(() => {});
    } catch (err) {
        console.log("Audio play error:", err);
    }
};

export const stopMusic = () => {
    try {
        if (audio) {
            audio.pause();
            audio.currentTime = 0;
            audio = null; // ✅ important reset
        }
    } catch (err) {
        console.log("Audio stop error:", err);
    }
};