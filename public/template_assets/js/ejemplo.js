{
 pages: [
  {
   name: "page1",
   elements: [
    {
     type: "radiogroup",
     name: "question1",
     title: "¿Te gusta la playa?",
     isRequired: true,
     choices: [
      {
       value: "0",
       text: "Si"
      },
      {
       value: "1",
       text: "Más o menos"
      },
      {
       value: "2",
       text: "No"
      }
     ]
    },
    {
     type: "text",
     name: "question2",
     title: "¿Cuantos años tienes?",
     isRequired: true,
     inputType: "number"
    },
    {
     type: "radiogroup",
     name: "question3",
     title: "¿Cuál es tu sexo?",
     choices: [
      {
       value: "0",
       text: "Femenino"
      },
      {
       value: "1",
       text: "Masculino"
      }
     ]
    },
    {
     type: "text",
     name: "question4",
     title: "¿Cuantó pesas?",
     isRequired: true,
     inputType: "number"
    },
    {
     type: "text",
     name: "question5",
     title: "¿Cuantó mides?",
     isRequired: true,
     inputType: "number"
    },
    {
     type: "dropdown",
     name: "question6",
     title: "¿En que comuna vives?",
     isRequired: true,
     choices: [
      {
       value: "0",
       text: "Santiago Centro"
      },
      {
       value: "1",
       text: "Providencia"
      },
      {
       value: "2",
       text: "Macul"
      },
      {
       value: "3",
       text: "Estación central"
      },
      {
       value: "4",
       text: "Las Condes"
      },
      {
       value: "5",
       text: "Recoleta"
      }
     ]
    },
    {
     type: "matrix",
     name: "question7",
     title: "¿Cuántas veces has consumido marihuana?",
     columns: [
      {
       value: "0",
       text: "Nunca"
      },
      {
       value: "1",
       text: "1-2 Veces"
      },
      {
       value: "2",
       text: "3-5 Veces"
      },
      {
       value: "3",
       text: "6-9 Veces"
      },
      {
       value: "4",
       text: "10-19 Veces"
      },
      {
       value: "5",
       text: "20-39 Veces"
      },
      {
       value: "6",
       text: "40 o más Veces"
      }
     ],
     rows: [
      "En tu vida",
      "En los últimos 12 meses",
      "En los últimos 30 días"
     ]
    }
   ]
  }
 ]
}

