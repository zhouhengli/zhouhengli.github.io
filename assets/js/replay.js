
document.addEventListener('DOMContentLoaded', () => {
  // Select all replay buttons
  // const replayButtons = document.querySelectorAll('.replay');
  // const replayButtons = document.querySelectorAll('.replay, .replay_lb_suc');
  replayButtons = document.querySelectorAll('.replay, .replay_lb_suc, .replay_v2',);
  // replayButtons = document.querySelectorAll('.replay_lb_suc');

  rm_id = 'btn_cal_replay'
  replayButtons = Array.from(replayButtons).filter(button => button.id !== rm_id);

  // replayButtons.concat(replayButtons_2)
  // const array1 = Array.from(replayButtons);
  // const array2 = Array.from(replayButtons_2);
  // Concatenate the arrays
  // replayButtons = array1.concat(array2);
  console.log('replayButtons', replayButtons)

  // Attach click event listeners to each button
  replayButtons.forEach(button => {
    button.addEventListener('click', () => {
      const sectionId = button.getAttribute('video_section');
      replayVideosInDiv(sectionId, 'parallel');
    });
  });

  btn_2 = document.getElementById('btn_cal_replay');
  // btn_2.removeEventListener('click');
  console.log(`btn_2: ${btn_2}`)

  btn_2.addEventListener('click', () => {
    const sectionId = btn_2.getAttribute('video_section');
    replayVideosInDiv(sectionId, 'seq');
  });

  // replayButtons_2
  // replayButtons_2.forEach(button => {
  //   btn_2.removeEventListener('click');
  //   // button.addEventListener('click', () => {
  //   //   const sectionId = button.getAttribute('video_section');
  //   //   replayVideosInDiv(sectionId, 'seq');
  //   // });
  // });

});


/**
 * Replays all video elements within a specified div.
 * @param {string} divId - The ID of the div containing the videos to replay.
 */
function replayVideosInDiv(divId, replay_type) {
  const div = document.getElementById(divId);
  
  console.log(`divId: ${divId}, ${div} `);

  if (!div) {
    console.log(`Div with ID '${divId}'.`);
    return;
  }

  const videos = div.querySelectorAll('video');

  console.log(`video elements found within div '${divId}: ${div}, ${videos.length}'.`);

  if (videos.length === 0) {
    console.warn(`No video elements found within div '${divId}'.`);
    return;
  }

  if (replay_type == 'parallel'){
    videos.forEach(video => {
      video.pause();
      video.currentTime = 0;
      video.play();
    });
  }
  else if (replay_type == 'seq'){
    videos.forEach(video => {
      video.pause();
      video.currentTime = 0;
    });
    playVideosSequentially(videos)
  }
  else {
    console.error("Not Implemented.");
  }

  console.log(` ${divId}: ${videos[0].currentSrc}, ${videos[0].currentTime}. `);

  

  // videos[0].play().catch(error => {
  //   console.error("Autoplay prevented:", error);
  // });

}
