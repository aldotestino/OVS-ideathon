import { client } from '.';
import { CopyResponse } from '../utils/types';
import { PromptSchema } from '../utils/validators';

class PromptApi {
  static endpoint = '/generate_copy';

  static async generateCopy(values: PromptSchema): Promise<CopyResponse> {
    const { data } = await client.post(`${PromptApi.endpoint}`, values);
    return data;
  }

}

export default PromptApi;