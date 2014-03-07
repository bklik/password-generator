'use strict';

angular.module('passwordGenerator.directives', [])
   /**********************************************************************
     * Password/PasswordGenerator Directives
     * Author: Brenton Klik
     *
     * Prerequisites: AngularJS, JQuery, Popup Directive
     * 
     * Description:
     * These directives make up the popup content for a password generator
     * control. The control has several options:
     *      Length: Number of characters the password should be
     *         ABC: Whether to use capital letters
     *         123: Whether to use numbers
     *         !@#: Whether to use symbols
     *
     * When the "Generate" button is pressed, a random sequence of 
     * characters will be created, and the result sent to the popup.
    **********************************************************************/
    .directive('password', [function() {
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                $(element).attr("directive", "password-generator");
                $(element).addClass("password-input");
            }
        }
    }])
    .directive('passwordGenerator', [function() {
        return {
            restrict: 'E',
            templateUrl: 'password-generator/templates/password-generator.html',
            replace: true,
            scope: {},
            link: function(scope, element, attrs) {

                $(element).find("#numLength").bind("keydown", function(event) {
                    var v = $(event.target).val().replace(/[^0-9]/g, '');

                    if(v != $(event.target).val())
                        $(event.target).val(v);
                });
                $(element).find("#numLength").bind("change", function(event) {
                    var v = $(event.target).val();
                        v = (v < 8) ? 8 : v;
                        v = (v > 50) ? 50 : v;

                    if(v != $(event.target).val())
                        $(event.target).val(v);
                });

                scope.generate = function() {
                    var strBase = "abcdefghijklmnopqrstuvwxyz";
                    var strCap = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                    var strNum = "1234567890";
                    var strSym = "!@#$%^&*";

                    if($(element).find("#cbCapitals:checked").length > 0)
                        strBase += strCap;
                    if($(element).find("#cbNumbers:checked").length > 0)
                        strBase += strNum;
                    if($(element).find("#cbSymbols:checked").length > 0)
                        strBase += strSym;

                    var len = parseInt($(element).find("#numLength").val());
                    var strResult = "";

                    while(strResult.length < len) {
                        var ranNum = Math.round(Math.random() * strBase.length);
                        strResult += strBase.substr(ranNum, 1);
                    }

                    //scope.popupResult(strResult);
                    scope.$emit("UPDATE_POPUP", strResult);
                }

                scope.closePasswordGenerator = function($event) {
                    scope.$emit("CLOSE_POPUP");
                }
            }
        }
    }]);