const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json({extended: true}));

const port = 2000;

const {Configuration, OpenAIApi, Configuration} = require('openai');
const configuration = new Configuration({
    apiKey: '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'
})
const openai = new OpenAIApi(configuration);


app.post('/request', async function(req, res) {
    const response = await openai.createCompletion({
        model: "code-davinci-002",
        prompt: req.body.prompt,
        max_tokens: 2048,
        temperature: 0,
        stop: "\n"
    });

    res.send({data: response.data.choices[0].text})
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})
