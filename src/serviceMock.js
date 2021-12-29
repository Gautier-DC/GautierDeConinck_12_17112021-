const mockedBackEnd = {
  getUser: () =>
    new Promise((resolve, reject) => {
      resolve({
        id: 42,
        userInfos: {
          firstName: "Jean-Pierre",
          lastName: "Mocky",
          age: 53,
        },
        score: 0.85,
        keyData: {
          calorieCount: 420,
          proteinCount: 180,
          carbohydrateCount: 80,
          lipidCount: 220,
        },
      });
    }),

  getUserActivity: () =>
    new Promise((resolve, reject) => {
      resolve({
        userId: 42,
        sessions: [
          {
            day: "2020-07-01",
            kilogram: 95,
            calories: 120,
          },
          {
            day: "2020-07-02",
            kilogram: 96,
            calories: 320,
          },
          {
            day: "2020-07-03",
            kilogram: 96,
            calories: 200,
          },
          {
            day: "2020-07-04",
            kilogram: 96,
            calories: 600,
          },
          {
            day: "2020-07-05",
            kilogram: 94,
            calories: 560,
          },
          {
            day: "2020-07-06",
            kilogram: 93,
            calories: 162,
          },
          {
            day: "2020-07-07",
            kilogram: 92,
            calories: 390,
          },
        ],
      });
    }),

  getUserSessions: () =>
    new Promise((resolve, reject) => {
      resolve({
        userId: 42,
        sessions: [
          {
            day: 1,
            sessionLength: 20,
          },
          {
            day: 2,
            sessionLength: 40,
          },
          {
            day: 3,
            sessionLength: 30,
          },
          {
            day: 4,
            sessionLength: 40,
          },
          {
            day: 5,
            sessionLength: 50,
          },
          {
            day: 6,
            sessionLength: 50,
          },
          {
            day: 7,
            sessionLength: 60,
          },
        ],
      });
    }),

  getUserPerf: () =>
    new Promise((resolve, reject) => {
      resolve({
        userId: 42,
        kind: {
          1: "cardio",
          2: "energy",
          3: "endurance",
          4: "strength",
          5: "speed",
          6: "intensity",
        },
        data: [
          {
            value: 300,
            kind: 1,
          },
          {
            value: 140,
            kind: 2,
          },
          {
            value: 20,
            kind: 3,
          },
          {
            value: 140,
            kind: 4,
          },
          {
            value: 150,
            kind: 5,
          },
          {
            value: 110,
            kind: 6,
          },
        ],
      });
    }),
};

export default mockedBackEnd;
