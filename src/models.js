import serviceAPI from "./serviceAPI";
import serviceMock from "./serviceMock";

//If you want to switch from API to Mock :
//Define const service with the one that you need (serviceAPI for API and serviceMock for mock) 
//Use the road http://localhost:3001/1 (you can put any userid, /42 will also work for example) to see the result

const service = serviceAPI ;

export class Models {
  static async getUser(userId) {
    return service.getUser(userId).then((response) => {
      /**
       * /Format the line in order to have the right name "score" for this data
       * @param {object} data 
       * @returns score: number
       */  
      const formatScore = (data) => {
        const defineScore = { ...data };
        if (defineScore.todayScore) {
          defineScore.score = defineScore.todayScore;
          delete defineScore.todayScore;
          return defineScore.score
        }

        return defineScore.score;
      };

      const user = {
        id: response.id,
        userInfos: {
          firstName: response.userInfos.firstName,
          lastName: response.userInfos.lastName,
          age: response.userInfos.age,
        },
        score: formatScore(response),
        keyData: {
          calorieCount: response.keyData.calorieCount,
          proteinCount: response.keyData.proteinCount,
          carbohydrateCount: response.keyData.carbohydrateCount,
          lipidCount: response.keyData.lipidCount,
        },
      };

      return user;
    });
  }

  static async getUserActivity(userId) {
    return service.getUserActivity(userId).then((response) => {
      const userActivity = {
        userId: response.id,
        sessions: response.sessions,
      };

      return userActivity;
    });
  }

  static async getUserSessions(userId) {
    return service.getUserSessions(userId).then((response) => {
      const userSessions = {
        userId: response.id,
        sessions: response.sessions,
      };

      return userSessions;
    });
  }

  static async getUserPerf(userId) {
    return service.getUserPerf(userId).then((response) => {
      const userPerf = {
        userId: response.id,
        kind: response.kind,
        data: response.data, 
      };

      return userPerf;
    });
  }
}

