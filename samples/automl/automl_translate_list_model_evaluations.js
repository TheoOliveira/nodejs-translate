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
  // [START automl_translate_list_model_evaluation]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  // const projectId = 'YOUR_PROJECT_ID';
  // const modelId = 'YOUR_MODEL_ID';

  // Imports the Google Cloud AutoML library
  const {AutoMlClient} = require(`@google-cloud/automl`);

  // Instantiates a client
  const client = new AutoMlClient();

  async function listModelEvaluations() {
    // Construct request
    const request = {
      parent: client.locationPath(projectId, 'us-central1'),
      filter_: 'translation_dataset_metadata:*',
    };

    const [response] = await client.listModelEvaluations(request);

    console.log(`List of model evaluations:`);
    for (const evaluation of response.modelEvaluation) {
      console.log(`Model evaluation name: ${evaluation.name}`);
      console.log(`Model annotation spec id: ${evaluation.annotationSpecId}`);
      console.log(`Model display name: ${evaluation.displayName}`);
      console.log(`Model create time`);
      console.log(`\tseconds ${evaluation.createTime.seconds}`);
      console.log(`\tnanons ${evaluation.createTime.nanons / 1e9}`);
      console.log(`Evaluation example count: ${evaluation.evaluatedExampleCount}`);
      console.log(`Model evaluation metrics: ${evaluation.translationEvaluationMetrics}`);
    }
  }

  listModelEvaluations();
  // [END automl_translate_list_model_evaluation]
}

main(...process.argv.slice(2));
