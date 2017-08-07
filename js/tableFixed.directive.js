(function(){
    'use strict';
    angular.module('tableFixed').directive('txTableFixed', txTableFixed);

    function txTableFixed(){
        var directive = {
            restrict : 'A',
            scope : {
                settings : '=txTableFixed'
            },
            controller : controller,
            link : link
        }

        return directive;


        function link(scope, element, attributes, controller){
            var table = element[0];
            var parent = $('<div></div>');
            setParent(table, parent, scope.settings, controller);

            scope.$watch('settings', function(settings){
                fixLeft(table, settings, controller);
            });

        }

        function controller(){
            var vm = this;
            var _leftColumns = {};

            vm.setLeftColumns = function(leftColumns){
                _leftColumns = leftColumns;
            }

            vm.getLeftColumns = function(){
                return _leftColumns;
            }
        } 
    }

    function setParent(table, parent, settings, controller){
            var _table = $(table);
            var _parent = $(parent);

            _table.before(_parent);
            _parent.append(_table);

            _parent
                .css({
                    'width' : '100%',
                    'overflow' : 'scroll'
                });

            _parent.scroll(function(){
                var left = _parent.scrollLeft();

                if (settings.left > 0)
                    controller.getLeftColumns().css('left', left);

            });
    }


    function fixLeft(table, settings, controller){
            var _table = $(table);
            var fixColumn = settings.left;
            var leftColumns = $();
            for (var i = 1; i <= fixColumn; i++){
                leftColumns = leftColumns
                    .add(_table.find('tr > *:nth-child(' + i + ')'));
            }

            var column = leftColumns;
            
            column.each(function(k, cell){
                var _cell =  $(cell);
                setBackground(_cell);
                _cell.css({
                    'position' : 'relative'
                });

            });

            controller.setLeftColumns(leftColumns);    
    }


    function setBackground(elements){
            elements.each(function(k, element){
                var _element = $(element);
                var _parent = _element.parent();
                var elementBackground =  getBackground(_element);
                var parentBackground = getBackground(_parent);

                var background = parentBackground ? parentBackground : 'white';
                background = elementBackground ? elementBackground : background;

                _element.css('background-color', background);
            });
    }

    function getBackground(element){
        var background = element.css('background-color');
        background = (background === 'transparent' || background === 'rgba(0, 0, 0, 0)' ? null : background);
        return background;
    }
})();