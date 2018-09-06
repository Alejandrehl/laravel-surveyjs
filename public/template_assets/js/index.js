//Example of adding new locale into the library.
var mycustomSurveyStrings = {
    pagePrevText: "My Page Prev",
    pageNextText: "My Page Next",
    completeText: "OK - Press to Complete"
};
Survey
    .surveyLocalization
    .locales["my"] = mycustomSurveyStrings;

Survey
    .StylesManager
    .applyTheme("default");


var json ={
 pages: [
  {
   name: "page1",
   elements: [
    {
     type: "radiogroup",
     name: "Pregunta1",
     title: "Tristeza",
     isRequired: true,
     choices: [
      {
       value: "0",
       text: "No me siento triste."
      },
      {
       value: "1",
       text: "Me siento triste gran parte del tiempo"
      },
      {
       value: "2",
       text: "Me siento triste todo el tiempo."
      },
      {
       value: "3",
       text: "Me siento tan triste o soy tan infeliz que no puedo soportarlo."
      }
     ]
    },
    {
     type: "radiogroup",
     name: "Pregunta2",
     title: "Pesimismo",
     isRequired: true,
     choices: [
      {
       value: "0",
       text: "No estoy desalentado respecto del mi futuro."
      },
      {
       value: "1",
       text: "Me siento más desalentado respecto de mi futuro que lo que solía estarlo."
      },
      {
       value: "2",
       text: "No espero que las cosas funcionen para mí."
      },
      {
       value: "3",
       text: "Siento que no hay esperanza para mi futuro y que sólo puede empeorar."
      }
     ]
    },
    {
     type: "radiogroup",
     name: "Pregunta3",
     title: "Fracaso",
     isRequired: true,
     choices: [
      {
       value: "0",
       text: "No me siento como un fracasado."
      },
      {
       value: "1",
       text: "He fracasado más de lo que hubiera debido."
      },
      {
       value: "2",
       text: "Cuando miro hacia atrás, veo muchos fracasos."
      },
      {
       value: "3",
       text: "Siento que como persona soy un fracaso total."
      }
     ]
    }
   ]
  },
  {
   name: "page2",
   elements: [
    {
     type: "radiogroup",
     name: "Pregunta4",
     title: "Pérdida de Placer",
     isRequired: true,
     choices: [
      {
       value: "0",
       text: "Obtengo tanto placer como siempre por las cosas de las que disfruto."
      },
      {
       value: "1",
       text: "No disfruto tanto de las cosas como solía hacerlo."
      },
      {
       value: "2",
       text: "Obtengo muy poco placer de las cosas que solía disfrutar."
      },
      {
       value: "3",
       text: "No puedo obtener ningún placer de las cosas de las que solía disfrutar."
      }
     ]
    },
    {
     type: "radiogroup",
     name: "Pregunta5",
     title: "Sentimientos de Culpa",
     isRequired: true,
     choices: [
      {
       value: "0",
       text: "No me siento particularmente culpable"
      },
      {
       value: "1",
       text: "Me siento culpable respecto de varias cosas que he hecho o que debería haber"
      },
      {
       value: "2",
       text: "Me siento bastante culpable la mayor parte del tiempo"
      },
      {
       value: "3",
       text: "Me siento culpable todo el tiempo."
      }
     ]
    },
    {
     type: "radiogroup",
     name: "Pregunta6",
     title: "Sentimientos de Castigo",
     isRequired: true,
     choices: [
      {
       value: "0",
       text: "No siento que este siendo castigado"
      },
      {
       value: "1",
       text: "Siento que tal vez pueda ser castigado."
      },
      {
       value: "2",
       text: "Espero ser castigado."
      },
      {
       value: "3",
       text: "Siento que estoy siendo castigado."
      }
     ]
    }
   ]
  },
  {
   name: "page3",
   elements: [
    {
     type: "radiogroup",
     name: "Pregunta7",
     title: "Disconformidad con uno mismo",
     isRequired: true,
     choices: [
      {
       value: "0",
       text: "Siento acerca de mi lo mismo que siempre."
      },
      {
       value: "1",
       text: "He perdido la confianza en mí mismo."
      },
      {
       value: "2",
       text: "Estoy decepcionado conmigo mismo"
      },
      {
       value: "3",
       text: "No me gusto a mí mismo"
      }
     ]
    },
    {
     type: "radiogroup",
     name: "Pregunta8",
     title: "Autocrítica",
     isRequired: true,
     choices: [
      {
       value: "0",
       text: "No me critico ni me culpo más de lo habitual"
      },
      {
       value: "1",
       text: "Estoy más crítico conmigo mismo de lo que solía estarlo"
      },
      {
       value: "2",
       text: "Me critico a mí mismo por todos mis errores"
      },
      {
       value: "3",
       text: "Me culpo a mí mismo por todo lo malo que sucede."
      }
     ]
    },
    {
     type: "radiogroup",
     name: "Pregunta9",
     title: "Pensamientos o Deseos Suicidas",
     isRequired: true,
     choices: [
      {
       value: "0",
       text: "No tengo ningún pensamiento de matarme."
      },
      {
       value: "1",
       text: "He tenido pensamientos de matarme, pero no lo haría"
      },
      {
       value: "2",
       text: "Querría matarme"
      },
      {
       value: "3",
       text: "Me mataría si tuviera la oportunidad de hacerlo."
      }
     ]
    }
   ]
  },
  {
   name: "page4",
   elements: [
    {
     type: "radiogroup",
     name: "Pregunta10",
     title: "Llanto",
     isRequired: true,
     choices: [
      {
       value: "0",
       text: "No lloro más de lo que solía hacerlo"
      },
      {
       value: "1",
       text: "Lloro más de lo que solía hacerlo"
      },
      {
       value: "2",
       text: "Lloro por cualquier pequeñez"
      },
      {
       value: "3",
       text: "Siento ganas de llorar, pero no puedo"
      }
     ]
    },
    {
     type: "radiogroup",
     name: "Pregunta11",
     title: "Agitación",
     isRequired: true,
     choices: [
      {
       value: "0",
       text: "No estoy más inquieto o tenso que lo habitual"
      },
      {
       value: "1",
       text: "Me siento más inquieto o tenso que lo habitual"
      },
      {
       value: "2",
       text: "Estoy tan inquieto o agitado que me es difícil quedarme quieto"
      },
      {
       value: "3",
       text: "Estoy tan inquieto o agitado que tengo que estar siempre en movimiento o haciendo algo"
      }
     ]
    },
    {
     type: "radiogroup",
     name: "Pregunta12",
     title: "Pérdida de Interés",
     isRequired: true,
     choices: [
      {
       value: "0",
       text: "No he perdido el interés en otras actividades o personas"
      },
      {
       value: "1",
       text: "Estoy menos interesado que antes en otras personas o cosas"
      },
      {
       value: "2",
       text: "He perdido casi todo el interés en otras personas o cosas"
      },
      {
       value: "3",
       text: "Me es difícil interesarme por algo."
      }
     ]
    }
   ]
  },
  {
   name: "page5",
   elements: [
    {
     type: "radiogroup",
     name: "Pregunta13",
     title: "Indecisión",
     isRequired: true,
     choices: [
      {
       value: "0",
       text: "Tomo mis propias decisiones tan bien como siempre"
      },
      {
       value: "1",
       text: "Me resulta más difícil que de costumbre tomar decisiones"
      },
      {
       value: "2",
       text: "Encuentro mucha más dificultad que antes para tomar decisiones"
      },
      {
       value: "3",
       text: "Tengo problemas para tomar cualquier decisión"
      }
     ]
    },
    {
     type: "radiogroup",
     name: "Pregunta14",
     title: "Desvalorización",
     isRequired: true,
     choices: [
      {
       value: "0",
       text: "No siento que yo no sea valioso"
      },
      {
       value: "1",
       text: "No me considero a mí mismo tan valioso y útil como solía considerarme"
      },
      {
       value: "2",
       text: "Me siento menos valioso cuando me comparo con otros"
      },
      {
       value: "3",
       text: "Siento que no valgo nada"
      }
     ]
    },
    {
     type: "radiogroup",
     name: "Pregunta15",
     title: "Pérdida de Energía",
     isRequired: true,
     choices: [
      {
       value: "0",
       text: "Tengo tanta energía como siempre",
       visibleIf: "0"
      },
      {
       value: "1",
       text: "Tengo menos energía que la que solía tener"
      },
      {
       value: "2",
       text: "No tengo suficiente energía para hacer demasiado"
      },
      {
       value: "3",
       text: "No tengo energía suficiente para hacer nada."
      }
     ]
    }
   ]
  },
  {
   name: "page6",
   elements: [
    {
     type: "radiogroup",
     name: "Pregunta16",
     title: "Cambios en los Hábitos de Sueño",
     isRequired: true,
     choices: [
      {
       value: "0",
       text: "No he experimentado ningún cambio en mis hábitos de sueño."
      },
      {
       value: "1a",
       text: "Duermo un poco más que lo habitual"
      },
      {
       value: "1b",
       text: "Duermo un poco menos que lo habitual"
      },
      {
       value: "2a",
       text: "Duermo mucho más que lo habitual"
      },
      {
       value: "2b",
       text: "Duermo mucho menos que lo habitual"
      },
      {
       value: "3a",
       text: "Duermo la mayor parte del día"
      },
      {
       value: "3b",
       text: "Me despierto 1-2 horas más temprano y no puedo volver a dormirme"
      }
     ]
    },
    {
     type: "radiogroup",
     name: "Pregunta17",
     title: "Irritabilidad",
     isRequired: true,
     choices: [
      {
       value: "0",
       text: "No estoy tan irritable que lo habitual"
      },
      {
       value: "1",
       text: "Estoy más irritable que lo habitual"
      },
      {
       value: "2",
       text: "Estoy mucho más irritable que lo habitual"
      },
      {
       value: "3",
       text: "Estoy irritable todo el tiempo"
      }
     ]
    },
    {
     type: "radiogroup",
     name: "Pregunta18",
     title: "Cambios en el Apetito",
     isRequired: true,
     choices: [
      {
       value: "0",
       text: "No he experimentado ningún cambio en mi apetito"
      },
      {
       value: "1a",
       text: "Mi apetito es un poco menor que lo habitual"
      },
      {
       value: "1b",
       text: "Mi apetito es un poco mayor que lo habitual."
      },
      {
       value: "2a",
       text: "Mi apetito es mucho menor que antes"
      },
      {
       value: "2b",
       text: "Mi apetito es mucho mayor que lo habitual"
      },
      {
       value: "3a",
       text: "No tengo apetito en absoluto"
      },
      {
       value: "3b",
       text: "Quiero comer todo el día"
      }
     ]
    }
   ]
  },
  {
   name: "page7",
   elements: [
    {
     type: "radiogroup",
     name: "Pregunta19",
     title: "Dificultad de Concentración",
     isRequired: true,
     choices: [
      {
       value: "0",
       text: "Puedo concentrarme tan bien como siempre"
      },
      {
       value: "1",
       text: "No puedo concentrarme tan bien como habitualmente"
      },
      {
       value: "2",
       text: "Me es difícil mantener la mente en algo por mucho tiempo."
      },
      {
       value: "3",
       text: "Encuentro que no puedo concentrarme en nada."
      }
     ]
    },
    {
     type: "radiogroup",
     name: "Pregunta20",
     title: "Cansancio o Fatiga",
     isRequired: true,
     choices: [
      {
       value: "0",
       text: "No estoy más cansado o fatigado que lo habitual."
      },
      {
       value: "1",
       text: "Me fatigo o me canso más fácilmente que lo habitual"
      },
      {
       value: "2",
       text: "Estoy demasiado fatigado o cansado para hacer muchas de las cosas que solía hacer."
      },
      {
       value: "3",
       text: "Estoy demasiado fatigado o cansado para hacer la mayoría de las cosas que solía"
      }
     ]
    },
    {
     type: "radiogroup",
     name: "Pregunta21",
     title: "Pérdida de Interés en el Sexo",
     isRequired: true,
     choices: [
      {
       value: "0",
       text: "No he notado ningún cambio reciente en mi interés por el sexo"
      },
      {
       value: "1",
       text: "Estoy menos interesado en el sexo de lo que solía estarlo."
      },
      {
       value: "2",
       text: "Estoy mucho menos interesado en el sexo."
      },
      {
       value: "3",
       text: "He perdido completamente el interés en el sexo."
      }
     ]
    }
   ]
  }
 ]
}

window.survey = new Survey.Model(json);

survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult')
            .innerHTML = "result: " + JSON.stringify(result.data);
            console.log("result: " + JSON.stringify(result.data));

            // Lógica de alertas
            let number_array = []
            object_result = Object.values(result.data).forEach( function(key) {
                number_array.push(parseInt(key))
            })
            let final_result = number_array.reduce( (a, b) => a + b, 0);

            //Condiones para alertas de riesgo
            const axios = require('axios');
            if ( final_result <= 11 ) {
                alert("Muchas gracias por participar de esta campaña de la Universidad de los Andes.")
                console.log("Clasificación: sin riesgo")
                console.log("El alumno no presenta riesgo suicida")

                axios.get('/axios')
                    .then(function (response) {
                        // handle success
                        console.log(response);
                    })
                    .catch(function (error) {
                        // handle error
                        console.log(error);
                    })
                    .then(function () {
                        // always executed
                    });

            } else if ( final_result >= 12 && final_result <= 18){
                alert("Muchas gracias por participar de esta campaña de la Universidad de los Andes, sera contactado por el coorinador de bienestar.")
                console.log("Clasificación: En riesgo")
                console.log("El alumno presenta riesgo suicida")
            } else if ( final_result >= 19 || number_array[8] > 1) {
                alert("Muchas gracias por participar de esta campaña de la Universidad de los Andes. En breve será contactado por el coordinador de bienestar de la universidad, si pasado 24 horas no se realiza se recomienda asistir a un servicio de urgencia de la clínica de la Universidad de los Andes donde serás atendido sin costo.")
                console.log("Clasificación: Riesgo urgencia")
                console.log("El alumno presenta riesgo suicida, por favor contactar con urgencia")
            }

    });
Survey.StylesManager.applyTheme("bootstrap");

// Cambiar mensaje con estado vacio
Survey.surveyStrings.emptySurvey = "No hay preguntas asignadas a este instrumento";

// Ver la encuesta en modo lectura al terminar
survey.onComplete.add(function (sender, options) {
    //By default clear methods clear all data and go to the first page
    //Here we tell survey keep the data by passing the first parameter as false
    sender.clear(false);
    //Put survey into read-only mode
    sender.mode = "display";
});

survey.locale = 'es';


$("#surveyElement").Survey({model: survey});
