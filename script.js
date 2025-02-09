/* Edit this file */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

video.addEventListener("timeupdate",function(){
	const progres=(video.currentTime/video.duration)*100;
	progressBar.style.width=progres+"%";
});
function toggleplay()
{
	if(video.paused)
	{
		video.play();
	}
	else
	{
		video.pause();
	}
}

function updatebtn()
{
	toggle.textContent=video.paused?"►":"❚❚";
}
video.addEventListener("error", () => {
   alert("Error loading video. Please check the source file.");
});
function handleRangeUpdate() {
    video[this.name] = this.value;
}
ranges.forEach(range => range.addEventListener("input", handleRangeUpdate));
function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}
progress.addEventListener("click", scrub);

function skip()
{
	video.currentTime+=parseFloat(this.dataset.skip)
}
toggle.addEventListener("click",toggleplay);
video.addEventListener("click",toggleplay);
video.addEventListener("play",updatebtn);
video.addEventListener("pause",updatebtn);
skipButtons.forEach(button=>button.addEventListener("click",skip));




