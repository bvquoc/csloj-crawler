**<center>Nguồn: Beginner Free Contest 3</center>**

Có $N$ điểm nằm trên trục $Ox$, điểm thứ $i$ có tọa độ $X_i$. Một người xuất phát từ tọa độ $0$, muốn thực hiện một hành trình đi qua tất cả $N$ điểm trên, mỗi điểm ít nhất một lần rồi quay trở về tọa độ $0$. Hãy cho biết độ dài ngắn nhất của một hành trình như thế.

## Dữ liệu vào:
- Dòng đầu tiên gồm số nguyên $N$ $(1 ≤ N ≤ 100)$ - số điểm trên trục $Ox$;
- Dòng tiếp theo gồm $N$ số nguyên $X_1, X_2, ..., X_N$ $(|X_i| ≤ 1000)$ - tọa độ của $N$ điểm.

## Dữ liệu ra:
- In ra độ dài ngắn nhất của hình trình mà người đó thực hiện.

## Ví dụ:
#### Dữ liệu vào:
```
3
-3 4 1
```

## Dữ liệu ra:
```
14
```

#### Dữ liệu vào:
```
4
-3 -3 0 0
```

## Dữ liệu ra:
```
6
```

#### Giải thích:
- Trong ví dụ thứ nhất, một trong các hình trình ngắn nhất có thể là: $0 → −3 → 1 → 4 → 0$.
- Trong ví dụ thứ hai, một trong các hình trình ngắn nhất có thể là: $0 → −3 → 0$.