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
  modelId = 'YOUR_MODEL_ID'
) {
  // [START automl_translate_delete_model]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  // const projectId = 'YOUR_PROJECT_ID';
  // const modelId = 'YOUR_MODEL_ID';

  // Imports the Google Cloud AutoML library
  const {AutoMlClient} = require(`@google-cloud/automl`);

  // Instantiates a client
  const client = new AutoMlClient();

  async function deleteModel() {
    // Construct request
    const request = {
      parent: client.datasetPath(projectId, 'us-central1', datasetId),
    };

    const [response] = await client.deleteModel(request);
    console.log(`Model deleted: ${response}`);
  }

  deleteModel();
  // [END automl_translate_delete_model]
}

main(...process.argv.slice(2));
