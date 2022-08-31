/**
 * @typedef {object} Todo
 * @property {string} id - 아이디
 * @property {string} contents - 내용
 * @property {boolean} iscompleted - 완료여부
 * @property {string} categorys - 카테고리
 * @property {string[]} tags - 태그목록
 */

/**
 * TODO 할 일을 추가하는 함수, 내용없이 추가할 수 없습니다.
 * @function createTodo
 * @param {string} contents - Todo 내용
 * @param {string} categorys - Todo 카테고리
 * @param {string[]} tags - Todo 태그
 */
const createTodo = ({ contents, categorys, tags }) => {};

/**
 * TODO 모든 할 일을 조회하는 함수, ID를 기반으로 특정 할 일을 조회합니다.
 * @function getTodo
 * @param {string} id - Todo id
 */
const getTodo = (id) => {};

/**
 * TODO ID를 제외한 모든 속성을 수정, 특정 할 일의 특정 태그를 수정할 수 있다.
 * @function updateTodo
 * @param {string} id - Todo id
 * @param {string} contents - Todo 내용
 * @param {boolean} iscompleted - Todo 완료여부
 * @param {string} categorys - Todo 카테고리
 * @param {string} tags - Todo 태그
 */
const updateTodo = ({ id, contents, iscompleted, categorys, tags }) => {};

/**
 * TODO ID를 기반으로 특정 할 일을 삭제, 모든 할 일을 제거,특정 할 일의 특정 태그를 삭제,특정 할 일의 모든 태그를 제거할 수 있다.
 * @function deleteTodo
 * @param {string} id - Todo id
 */
const deleteTodo = (id) => {};
