const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json({extended: true}));

const port = 4000;

const {Configuration, OpenAIApi} = require('openai');
const configuration = new Configuration({
    apiKey: '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'
})
const openai = new OpenAIApi(configuration);


app.post('/request', async function(req, res) {
    console.log(req.body.widget +  "(//Dart \n //" +req.body.prompt + " \n");
    const response = await openai.createCompletion({
        model: "code-davinci-002",
        prompt: req.body.widget +  "(//Dart \n //" +req.body.prompt + " \n",
        max_tokens: 100,
        temperature: 0,
        stop: "\n"
    });
    console.log(response.data.choices);

    res.send({data: response.data.choices[0].text})
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})