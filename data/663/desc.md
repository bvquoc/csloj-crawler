**<center>Nguồn: Beginner Free Contest 13</center>**

Trên trục tọa độ ~Ox~ có ~n~ điểm xanh và ~n~ điểm đỏ. Điểm xanh  thứ ~i~ có tọa độ ~b_i~, điểm đỏ thứ ~i~
có tọa độ ~r_i~. Với hai điểm có tọa độ  ~x_1~ và ~x_2~, ta định nghĩa khoảng cách giữa hai điểm đó là ~|x_2 − x_1|~.

Hãy tìm khoảng cách nhỏ nhất giữa một cặp điểm xanh và điểm đỏ bất kì trong số các điểm đã cho.

## Dữ liệu vào:
- Dòng đầu tiên gồm số nguyên ~n\ (1 ≤ n ≤ 10^5)~ - số điểm xanh và cũng là số điểm đỏ;
- Dòng thứ hai gồm ~n~ số nguyên ~b_1, b_2, . . . , b_n\ (1 ≤ b_i ≤ 10^9)~ - với ~b_i~ là tọa độ của điểm xanh thứ ~i~;
- Dòng thứ ba gồm ~n~ số nguyên ~r_1, r_2, . . . , r_n~ ~(1 ≤ r_i ≤ 10^9)~ - với ~r_i~ là tọa độ của điểm xanh thứ ~i~.

## Dữ liệu ra:
- In ra khoảng cách nhỏ nhất giữa một cặp điểm xanh và điểm đỏ bất kì.

## Ví dụ:
#### Dữ liệu vào:
```
1
2
6
```

#### Dữ liệu ra:
```
4
```

#### Dữ liệu vào:
```
2
1 7
10 5
```

#### Dữ liệu ra:
```
2
```

#### Giải thích:
- Ở ví dụ thứ nhất, khoảng cách giữa điểm xanh duy nhất và điểm đỏ duy nhất là ~|2 − 6| = 4~
- Ở ví dụ thứ hai:
    - Khoảng cách giữa điểm xanh thứ ~1~ và điểm đỏ thứ ~1~ là ~|1 − 10| = 9~
    - Khoảng cách giữa điểm xanh thứ ~1~ và điểm đỏ thứ ~2~ là ~|1 − 5| = 4~
    - Khoảng cách giữa điểm xanh thứ ~2~ và điểm đỏ thứ ~1~ là ~|7 − 10| = 3~
    - Khoảng cách giữa điểm xanh thứ ~2~ và điểm đỏ thứ ~2~ là ~|7 − 5| = 2~

Do đó, khoảng cách nhỏ nhất cần tìm là ~2~

## Giới hạn:
- **Subtask** ~\#1~ ~(50\%\text{ số test}): n ≤ 1000~;
- **Subtask** ~\#2~ ~(50\%\text{ số test}):~ Không có giới hạn gì thêm.