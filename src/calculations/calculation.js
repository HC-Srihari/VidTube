export function convertDuration(duration) {
  const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);

  const hours = (match[1] && parseInt(match[1].slice(0, -1))) || 0;
  const minutes = (match[2] && parseInt(match[2].slice(0, -1))) || 0;
  const seconds = (match[3] && parseInt(match[3].slice(0, -1))) || 0;

  let formattedDuration = "";
  if (hours > 0) {
    formattedDuration += `${hours}`;
  }
  if (minutes > 0) {
    if(formattedDuration) formattedDuration+=':';
    if(minutes<10)  formattedDuration += "0";

    formattedDuration += `${minutes}`;
  }
  if (seconds > 0 || (hours === 0 && minutes === 0)) {
    if (hours === 0 && minutes === 0) formattedDuration += "00";
    if (formattedDuration) formattedDuration += ":";

    if(seconds<10)  formattedDuration += "0";

    formattedDuration += `${seconds}`;
  }

  return formattedDuration.trim();
}




 export function timeAgo(timestamp) {
  const previousDate = new Date(timestamp);
  const currentDate = new Date();
  const timeDifference = currentDate - previousDate;
  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);

  if (years > 0) {
    return `${years} year${years > 1 ? 's' : ''} ago`;
  } else if (months > 0) {
    return `${months} month${months > 1 ? 's' : ''} ago`;
  } else if (days > 0) {
    return `${days} day${days > 1 ? 's' : ''} ago`;
  } else if (hours > 0) {
    return `${hours} hour${hours > 1 ? 's' : ''} ago`;
  } else if (minutes > 0) {
    return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
  } else {
    return `${seconds} second${seconds > 1 ? 's' : ''} ago`;
  }
}



export function formatYouTubeViews(views) {
  if (views >= 1e9) {
    return (views / 1e9).toFixed(1) + "B views";
  } else if (views >= 1e6) {
    return (views / 1e6).toFixed(1) + "M views";
  } else if (views >= 1e3) {
    return (views / 1e3).toFixed(1) + "K views";
  } else {
    return views + " views";
  }
}

export function formatYouTubeLikes(views) {
  if (views >= 1e9) {
    return (views / 1e9).toFixed(1) + "B";
  } else if (views >= 1e6) {
    return (views / 1e6).toFixed(1) + "M";
  } else if (views >= 1e3) {
    return (views / 1e3).toFixed(1) + "K";
  } else {
    return views + "";
  }
}

export function formatYouTubeSubscribers(views) {
  if (views >= 1e9) {
    return (views / 1e9).toFixed(1) + "B Subscribers";
  } else if (views >= 1e6) {
    return (views / 1e6).toFixed(1) + "M Subscribers";
  } else if (views >= 1e3) {
    return (views / 1e3).toFixed(1) + "K Subscribers";
  } else {
    return views + " Subscribers";
  }
}