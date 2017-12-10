import { initializeApp, database } from 'firebase';
import { BeConnector } from './be-connector';
import {
  ResponseFireBaseDelete,
  ResponseFireBaseGet,
  ResponseFireBasePost,
  ResponseFireBasePatch,
  ResponseFireBasePut,
} from '../response';
import {
  RequestOptsFireBaseGet,
  RequestOptsFireBasePost,
  RequestOptsFireBasePatch,
  RequestOptsFireBasePut,
  RequestOptsFireBaseDelete,
} from '../request-opts';

const config = {
  apiKey: 'AIzaSyCg55-KdUXyTHmn2MUJdmB0g2iIYG0gyio',
  authDomain: 'todo-cd4fd.firebaseapp.com',
  databaseURL: 'https://todo-cd4fd.firebaseio.com',
  projectId: 'todo-cd4fd',
  storageBucket: 'todo-cd4fd.appspot.com',
  messagingSenderId: '617535941085',
};

initializeApp(config);

export default class BeConnectorFireBaseImp implements BeConnector {
  public sendGetRequest<T>(url: string, requestOpts: RequestOptsFireBaseGet): Promise<ResponseFireBaseGet<T[]>> {
    let ref = database().ref(url);

    if (requestOpts.params !== undefined) {
      Object.keys(requestOpts.params).forEach((key) => {
        ref = ref[key].call(ref, (requestOpts.params as Object)[key]);
      });
    }

    return Promise.resolve(
      ref.once('value')
        .then((snapshot) => {
          const result: T[] = [];

          snapshot.forEach((child: database.DataSnapshot) => {
            const key = child.key;
            const data = child.val();

            result.push({
              id: key,
              ...data,
            });
          });

          return {
            status: 200,
            body: result,
          };
        })
        .catch(error => {
          throw error;
        })
    );
  }

  public sendPostRequest<T, U>(url: string, requestOpts: RequestOptsFireBasePost<T>): Promise<ResponseFireBasePost<U>> {
    return Promise.resolve(
      database().ref(url).push(requestOpts.body).once('value')
        .then((snapshot: database.DataSnapshot) => {
          return {
            status: 201,
            body: {
              id: snapshot.key,
              ...snapshot.exportVal(),
            },
          };
        })
        .catch(error => {
          throw error;
        })
    );
  }

  public sendPatchRequest<T>(url: string, requestOpts: RequestOptsFireBasePatch<T>): Promise<ResponseFireBasePatch> {
    return Promise.resolve(
      database().ref(url).set(requestOpts.body)
    );
  }

  public sendPutRequest<T>(url: string, requestOpts: RequestOptsFireBasePut<T>): Promise<ResponseFireBasePut> {
    return Promise.resolve(
      database().ref(url).set(requestOpts.body)
    );
  }

  public sendDeleteRequest(url: string, requestOpts: RequestOptsFireBaseDelete): Promise<ResponseFireBaseDelete> {
    return Promise.resolve(
      database().ref(url).remove()
    );
  }
}
