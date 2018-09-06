// establecer idioma local
SurveyEditor.editorLocalization.currentLocale = "es";


// tema custom
var mainColor = "#6897e5";
var mainHoverColor = "#6897e5";
var textColor = "#4a4a4a";
var headerColor = "#7ff07f";
var headerBackgroundColor = "#4a4a4a";
var bodyContainerBackgroundColor = "#f8f8f8";

var defaultThemeColorsSurvey = Survey
    .StylesManager
    .ThemeColors["default"];
defaultThemeColorsSurvey["$main-color"] = mainColor;
defaultThemeColorsSurvey["$main-hover-color"] = mainHoverColor;
defaultThemeColorsSurvey["$text-color"] = textColor;
defaultThemeColorsSurvey["$header-color"] = headerColor;
defaultThemeColorsSurvey["$header-background-color"] = headerBackgroundColor;
defaultThemeColorsSurvey["$body-container-background-color"] = bodyContainerBackgroundColor;

var defaultThemeColorsEditor = SurveyEditor
    .StylesManager
    .ThemeColors["default"];
defaultThemeColorsEditor["$primary-color"] = mainColor;
defaultThemeColorsEditor["$secondary-color"] = mainColor;
defaultThemeColorsEditor["$primary-hover-color"] = mainHoverColor;
defaultThemeColorsEditor["$primary-text-color"] = textColor;
defaultThemeColorsEditor["$selection-border-color"] = mainColor;

Survey
    .StylesManager
    .applyTheme();
SurveyEditor
    .StylesManager
    .applyTheme();

// tipos de elementos 
var editorOptions = {
    questionTypes: ["text", "checkbox", "radiogroup", "dropdown", "comment", "rating", "image", "boolean", "html", "expresion", "file", "matrix", "matrixdropdown", "matrixdynamic", "multipletext", "panel", "paneldynamic"]
};

//  opcion Editor JSON
editorOptions.showJSONEditorTab = false;
// opcion vista previa
editorOptions.showTestSurveyTab = true;


var editor = new SurveyEditor.SurveyEditor("editorElement", editorOptions);
editor.render(null, editorOptions);

// categorias para los tipos de elementos
editor
    .toolbox
    .changeCategories([
        {
            name: "panel",
            category: "Paneles"
        }, {
            name: "paneldynamic",
            category: "Paneles"
        }, {
            name: "matrix",
            category: "Matrices"
        }, {
            name: "matrixdropdown",
            category: "Matrices"
        }, {
            name: "matrixdynamic",
            category: "Matrices"
        }
    ]);



//Agregar un boton que levanta un modal con la vista previa
editor
    .toolbarItems
    .push({
        id: "custom-preview",
        visible: true,
        title: "Vista previa",
        action: function () {
            var windowElement = document.getElementById("surveyContainerInPopup");
            var testSurveyModel = new Survey.Model(editor.getSurveyJSON());
            testSurveyModel.render("surveyContainerInPopup");
            $("#modalSurvey").modal("show");
        }
    });
