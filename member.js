function skillsMember() {
    return {
        restrict: 'E',
        templateUrl: "",
        controller: 'SkillsMemberControllor',
        controllerAs: 'vm',
        bindToController: true,
        scope: {
            member: 'm'
        }
    }
}