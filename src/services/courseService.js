import config from '../../src/config.json';
import http from './httpService';

export function getCourses() {
    return http.get(config.api_course);
}

export function createCourse(course) {
    return http.post(config.api_course, course);
}

export function updateCourse(course) {
    const body = { ...course };
    delete body._id;
    return http.put(`${config.api_course}/${course._id}`, body);
}

export function getCourseCount() {
    return http.get(config.api_course + '/count');
}

export function deleteCourses(courseId) {
    return http.delete(config.api_course + '/' + courseId);
}
