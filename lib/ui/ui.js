angular.module("ui", []);

angular.module("ui").run(function ($templateCache) {
    $templateCache.put("view/accordion.html", '<div class="ui-accordion-title bg-success p-2 m-2" ng-click="open()">{{ title }}</div>'
    +'<div class="ui-accordion-content" ng-transclude ng-show="isOpened"></div>');
});



angular.module("ui").directive("uiAccordions", function() {
    return {
        controller: function ($scope, $element, $attrs) {
            let accordions = []

            this.regiterAccordion = function (accordion) {
                accordions.push(accordion)
            }

            this.closeAll = function () {
                accordions.forEach(function (accordion){
                    accordion.isOpened = false
                })
            }
        }
    }
})

angular.module("ui").directive("uiAccordion", function() {
    return {
        templateUrl: "view/accordion.html",
        transclude: true,
        scope: {
            title: "@"
        },
        require: "^uiAccordions",
        link: function (scope, element, attrs, ctrl) {
            ctrl.regiterAccordion(scope)
            scope.open = function () {
                ctrl.closeAll()
                scope.isOpened=!scope.isOpened;
            }
        }
    }
})