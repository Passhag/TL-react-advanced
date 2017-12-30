import { initializeApp, database } from 'firebase';
import { HttpProvider } from '../http-provider';
import {
  ResponseFirebase,
} from '../response';
import {
  RequestOptsFirebase,
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

export class FirebaseProvider implements HttpProvider {
  public get(url: string, requestOpts?: RequestOptsFirebase): Promise<ResponseFirebase> {
    let ref = database().ref(url);

    if (requestOpts && requestOpts.params !== undefined) {
      Object.keys(requestOpts.params).forEach((key) => {
        ref = ref[key].call(ref, (requestOpts.params as Object)[key]);
      });
    }

    return Promise.resolve(
      ref.once('value')
        .then((snapshot) => {
          const result: any[] = [];

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

  public post(url: string, requestOpts: RequestOptsFirebase): Promise<ResponseFirebase> {
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

  public patch(url: string, requestOpts: RequestOptsFirebase): Promise<ResponseFirebase> {
    return Promise.resolve(
      database().ref(url).set(requestOpts.body)
    );
  }

  public put(url: string, requestOpts: RequestOptsFirebase): Promise<ResponseFirebase> {
    return Promise.resolve(
      database().ref(url).set(requestOpts.body)
    );
  }

  public delete(url: string): Promise<ResponseFirebase> {
    return Promise.resolve(
      database().ref(url).remove()
    );
  }
}
