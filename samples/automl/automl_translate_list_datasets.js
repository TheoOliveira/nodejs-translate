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
  projectId = 'YOUR_PROJECT_ID'
) {
  // [START automl_translate_list_dataset]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  // const projectId = 'YOUR_PROJECT_ID';

  // Imports the Google Cloud AutoML library
  const {AutoMlClient} = require(`@google-cloud/automl`);

  // Instantiates a client
  const client = new AutoMlClient();

  async function listDatasets() {
    // Construct request
    const request = {
      parent: client.locationPath(projectId, 'us-central1'),
      filter_: 'translation_dataset_metadata:*',
    };

    const [response] = await client.listDatasets(request);

    console.log(`List of datasets:`);
    for (const dataset of response.datasets) {
      console.log(`Dataset name: ${dataset.name}`);
      console.log(`Dataset id: ${dataset.name.split('/')[-1]}`);
      console.log(`Dataset display name: ${dataset.displayName}`);
      console.log(`Translation dataset metadata:`);
      console.log(`\tSource language code: ${dataset.translationDatasetMetadata.sourceLanguageCode}`);
      console.log(`\tTarget language code: ${dataset.translationDatasetMetadata.targetLanguageCode}`);
      console.log(`Dataset create time`);
      console.log(`\tseconds ${dataset.createTime.seconds}`);
      console.log(`\tnanons ${dataset.createTime.nanons / 1e9}`);
    }
  }

  listDatasets();
  // [END automl_translate_list_dataset]
}

main(...process.argv.slice(2));
