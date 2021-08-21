**<center>Nguồn: Beginner Free Contest 5</center>**

Cho một dãy số nguyên ~A_1, A_2, . . . , A_N~. Bạn có thể thực hiện phép biến đổi sau với số lần tùy ý (có thể không thực hiện lần nào):
- Chọn một vị trí ~i~ từ ~1~ đến ~N~, và đảo dấu ~A_i~ (tức là thay thể ~A_i~ bởi ~−A_i~)

Hãy cho biết số phép biến đổi ít nhất cần thực hiện, để dãy thu được thỏa mãn tính chất sau:
- Tích của hai phần tử bất kì trong dãy đều là số nguyên dương (nói cách khác, với mỗi cặp ~(i, j)~ thỏa ~1 ≤ i < j ≤ N~, ta có ~A_i ×  A_j > 0~).

## Dữ liệu vào:
- Dòng đầu tiên gồm số nguyên ~N~ ~(2 ≤ N ≤ 100)~ - số phần tử của dãy ~A~.
- Dòng thứ hai gồm ~N~ số nguyên ~A_1, A_2, . . . , A_N~ ~(−1000 ≤ A_i ≤ 1000)~ - mô tả dãy ~A~.

## Dữ liệu ra:
- In ra một số nguyên duy nhất là số phép biến đổi ít nhất cần thực hiện. Trong trường hợp không có cách biến đổi, hãy in ra ~-1~.

## Ví dụ:
#### Dữ liệu vào:
```
5
10 -20 -30 40 50
```

## Dữ liệu ra:
```
2
```

#### Dữ liệu vào:
```
4
9 7 2 3
```

## Dữ liệu ra:
```
0
```

#### Dữ liệu vào:
```
3
0 0 0
```

## Dữ liệu ra:
```
-1
```

## Giải thích:
- Trong ví dụ thứ nhất, ta sẽ lần lượt thực hiện phép biến đổi với vị trí ~2~ và ~3~. Khi đó, dãy ~A~ trở thành ~[10, 20, 30, 40, 50]~.