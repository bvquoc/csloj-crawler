**<center>Nguồn: Beginner Free Contest 6</center>**

Một số nguyên không âm ~x~ được gọi là đẹp nếu như ~x~ chia hết cho một trong ba số sau: ~4, 7~ và ~11~. Hãy đếm số lượng số đẹp ~x~ thỏa mãn ~L ≤ x ≤ R~.

## Dữ liệu vào:
- Dòng đầu tiên chứa số ~T~ tương ứng với số lượng bộ test.
- ~T~ dòng tiếp theo, mỗi dòng chứa ~2~ số nguyên không âm tương ứng với ~L~ và ~R~.

## Dữ liệu ra:
- In ra ~T~ dòng, mỗi dòng chứa một số duy nhất tương ứng với số lượng số đẹp.

## Ví dụ:
#### Dữ liệu vào:
```
2
1 10
11 15
```

## Dữ liệu ra:
```
3
3
```

#### Giải thích
- Trong test ví dụ đầu tiên, có ba số thỏa mãn là ~4, 7~ và ~8~.
- Trong test ví dụ thứ hai, có ba số thỏa mãn là ~11, 12~ và ~14~.

## Giới hạn:
Trong tất cả các test, ~T ≤ 20~.
- **Subtask** ~\#1~ ~(60\%): 0 ≤ L ≤ R ≤ 10^6~;
- **Subtask** ~\#2~ ~(40\%): 0 ≤ L ≤ R ≤ 10^{12}~.