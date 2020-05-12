function solution(arg1, arg2, arg3) {
    let stepsCount = Number(arg1);
    let studentStepInMeters = Number(arg2);
    let studentSpeedKmPerHour = Number(arg3);

    let distanceInMeters = stepsCount * studentStepInMeters;
    let speedInMetersPerSeconds = studentSpeedKmPerHour / 3.6;
    let time = distanceInMeters / speedInMetersPerSeconds;
    let rests = Math.floor(distanceInMeters / 500) * 60;

    let fullTime = time + rests;

    let minutes = Math.floor(fullTime / 60);
    let seconds = Math.round(fullTime - (minutes * 60));
    let hours = Math.floor(fullTime / (60 * 60));

    let secondsToString = seconds < 10 ? '0' + seconds : '' + seconds;
    let minutesToString = minutes < 10 ? '0' + minutes : '' + minutes;
    let hoursToString = hours < 10 ? '0' + hours : '' + hours;

    return `${hoursToString}:${minutesToString}:${secondsToString}`;
}
