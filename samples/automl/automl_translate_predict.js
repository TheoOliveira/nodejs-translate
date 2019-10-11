/**
 * Copyright 2019 Google LLC
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

function main(
  projectId = 'YOUR_PROJECT_ID',
  modelId = 'YOUR_MODEL_ID',
  path = 'path_to_local_file.txt'
) {
  // [START automl_translate_predict]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  // const projectId = 'YOUR_PROJECT_ID';
  // const modelId = 'YOUR_MODEL_ID';
  // const path = 'path_to_local_file.txt';

  // Imports the Google Cloud AutoML library
  const {PredictionServiceClient} = require(`@google-cloud/automl`);

  // Instantiates a client
  const client = new PredictionServiceClient();

  // Read the file content for translation.
  const content = fs.readFileSync(filePath, `utf8`);

  async function predict() {
    // Construct request
    const request = {
      parent: client.modelPath(projectId, 'us-central1', modelId),
      payload: {
        textSnippet: {
          content: content,
        },
      },
    };

    const [response] = await client.predict(request);

    console.log(
      `Translated content: `,
      response.payload[0].translation.translatedContent.content
    );
  }

  predict();
  // [END automl_translate_predict]
}

main(...process.argv.slice(2));