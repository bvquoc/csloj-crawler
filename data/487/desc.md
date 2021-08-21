Một đàn kiến đang đi kiếm mồi, chúng tìm được $n$ điểm có mồi trên một đường thẳng mà ta coi như một trục tọa độ, (các điểm này được đánh số từ $1$ đến $n$). Điểm thứ $i$ có tọa độ là một số nguyên $x_i$ và có khối lượng mồi $w_i$. Con kiến đầu đàn rất thông minh và nó xác định rằng chúng cần tập kết mồi về $k$ điểm phân biệt (để dự trữ mồi, tránh rủi ro do thiên tai…) trong đó mỗi điểm tập kết mồi trùng với một điểm có mồi hiện tại. Tất cả mồi ở mỗi điểm có mồi gần điểm tập kết mồi nào thì chúng sẽ tha mồi về điểm tập kết đó. Chi phí để vận chuyển mồi ở mỗi điểm chứa mồi về một điểm tập kết mồi bằng khối lượng mồi nhân với khoảng cách cần vận chuyển. Bạn hãy giúp con kiến tìm $k$ điểm tập kết mồi sao cho tổng chi phí “vận chuyển” của chúng là nhỏ nhất.

## Dữ liệu vào:
- Dòng đầu chứa hai số nguyên dương $n$ và $k$ lần lượt là số điểm chứa mồi và số điểm tập kết mồi;
- Dòng thứ hai chứa $n$ số nguyên $x_1, x_2, …, x_n$ là tọa độ các điểm chứa mồi (các số $x_i$ được liệt kê tăng dần);
- Dòng thứ ba chứa $n$ số nguyên $w_1, w_2, …, w_k$ là khối lượng mồi ở các điểm chứa mồi;

Hai số liên tiếp trên cùng một dòng được ghi cách nhau một dấu cách.

## Dữ liệu ra:
- Một số nguyên duy nhất là tổng chi phí vận chuyển mồi nhỏ nhất.

## Ví dụ:
#### Dữ liệu vào:
```
4 2
1 2 3 5
1 2 2 3
```

#### Dữ liệu ra:
```
3
```

#### Giải thích:
- Hai điểm tập kết mồi có tọa độ là $2$ và $5$, mồi ở các điểm có tọa độ $1$ và $3$ được vận chuyển về điểm tập kết mồi tại tọa độ $2$, chi phí vận chuyển là $1 + 2 = 3$.

## Giới hạn:
- $1 ≤ n ≤ 1000; 1 ≤ k ≤ 30; k ≤ n; 0 ≤ x_i ≤ 20000; 1 ≤ w_i ≤ 100$.