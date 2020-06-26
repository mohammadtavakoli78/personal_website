import _ from 'lodash';

export function paginate(allPosts, currentPage, pageSize) {
    const startIndex = (currentPage - 1) * pageSize;
    return _(allPosts).slice(startIndex).take(pageSize).value();
}