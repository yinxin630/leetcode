/*
 * @lc app=leetcode.cn id=1310 lang=javascript
 *
 * [1310] 获取你好友已观看的视频
 * 
 * 1. 好友关系构成了无向图, 获取指定层级的好友关系时要排除环
 * 2. 使用双数组遍历好友关系, 因为俩人可能是同一人的好友, 因此用了 Set 去重
 * 3. 取到 n 层级的人之后, 计算各电影观看次数, 最后做个排序即可
 * 
 */

 /**
 * @param {string[][]} watchedVideos
 * @param {number[][]} friends
 * @param {number} id
 * @param {number} level
 * @return {string[]}
 */
var watchedVideosByFriends = function(watchedVideos, friends, id, level) {
    const set = new Set([id]);
    let list1 = new Set([id]);
    let list2 = new Set();
    while (level > 0) {
        const current = list1.size ? list1 : list2;
        const next = list1.size ? list2 : list1;

        for (const n of current) {
            for (const f of friends[n]) {
                if (!set.has(f)) {
                    next.add(f);
                    set.add(f);
                }
            }
        }

        level--;
        current.clear();
    }

    const peoples = Array.from(list1.size ? list1 : list2);

    const map = {};
    for (const p of peoples) {
        for (const w of watchedVideos[p]) {
            map[w] = map[w] || 0;
            map[w]++;
        }
    }

    const result = Object.entries(map).sort((a, b) => {
        if (a[1] < b[1]) {
            return -1;
        } else if (a[1] > b[1]) {
            return 1;
        } else {
            return a[0] < b[0] ? -1 : 1;
        }
    }).map(x => x[0]);

    return result;
};
