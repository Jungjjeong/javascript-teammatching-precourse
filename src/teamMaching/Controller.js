import Model from './Model.js';
import View from './View.js';

export default class Controller {
  constructor() {
    this.view = new View();
    this.model = new Model();
    this.$courseSelect = document.querySelector('#course-select');
    this.$missionSelect = document.querySelector('#mission-select');
    this.$selectBtn = document.querySelector('#show-team-matcher-button');
    this.$countInput = document.querySelector('#team-member-count-input');
    this.$matchBtn = document.querySelector('#match-team-button');
    this.view.showSection();
    this.addSelect();
    this.addMatching();
  }

  addSelect() {
    this.$selectBtn.addEventListener('click', e => {
      e.stopPropagation();

      const course = this.$courseSelect.value;
      const mission = this.$missionSelect.value;
      this.setTeamMatching(course, mission);
    });
  }

  setTeamMatching(course, mission) {
    this.model.addSelect(course, mission);
    if (course == 'frontend') {
      this.view.showList(this.model.FrontPeopleList);
    } else if (course == 'backend') {
      this.view.showList(this.model.BackPeopleList);
    }
    this.view.showMatching();
  }

  addMatching() {
    this.$matchBtn.addEventListener('click', e => {
      e.preventDefault();

      const count = this.$countInput.value;
      console.log(count);
    });
  }

  addPeopleList(peopleList) {
    this.model.FrontPeopleList = peopleList.front;
    this.model.BackPeopleList = peopleList.back;
  }
}
