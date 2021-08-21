Cho đồ thị có hướng gồm ~n~ đỉnh, ~m~ cung và sức chứa của mỗi cung. Hãy tìm luồng cực đại từ đỉnh phát ~s~ đến đỉnh thu ~t~.

## Dữ liệu vào:
- Dòng đâu chứa bốn số nguyên dương ~n, m, s, t~;
- ~m~ dòng tiếp theo, mỗi dòng chứa ba số nguyên dương ~u, v, c~ mô tả một cung từ đỉnh ~u~ tới đỉnh ~v~ với sức chứa ~c~.

## Dữ liệu ra:
- Một số nguyên là luồng cực đại từ đỉnh ~s~ đến đỉnh ~t~.

## Ví dụ:
#### Dữ liệu vào:
```
7 14 1 7
1 2 5
1 3 6
1 4 5
2 3 2
2 5 3
3 2 2
3 4 3
3 5 3
3 6 7
4 6 5
5 6 1
6 5 1
5 7 8
6 7 7
```

#### Dữ liệu ra:
```
14
```

#### Dữ liệu vào:
```
10 16 1 2
1 3 2
1 4 2
5 2 2
6 2 2
3 5 1
3 6 1
4 5 1
4 6 1
1 7 2147483647
9 2 2147483647
7 8 2147483647
10 9 2147483647
8 5 2
8 6 2
3 10 2
4 10 2
```

#### Dữ liệu ra:
```
8
```

## Giới hạn:
- ~1\leqslant n \leqslant 1200, 1\leqslant m \leqslant 120000, 1\leqslant c \leqslant 2^{31}-1~;
- Đảm bảo rằng kết quả không vượt quá ~ 2^{31}-1 ~.