Cho một lưới ô vuông gồm $m$ dòng và $n$ cột. Các dòng được đánh số từ $1$ đến $m$ từ trên xuống dưới, các cột được đánh số từ $1$ đến $n$ từ trái qua phải. Ô nằm ở vị trí dòng $i$ và cột $j$ của lưới được gọi là ô $(i, j)$ và khi đó, $i$ được gọi là tọa độ dòng còn $j$ được gọi là tọa độ cột của ô này. Trên ô $(i, j)$ của lưới ghi số nguyên dương $a_{ij}$. Trên lưới đã cho, từ ô $(i, j)$ ta có thể di chuyển đến ô $(p, q)$ nếu $\text{UCLN}(a_{ij}, a_{pq}) > 1$ và một trong các điều kiện sau đây được thỏa mãn:
- $q = j$ và $i < p ≤ m$ (đi xuống dưới).
- $i = p$ và $j < q ≤ n$ (đi sang phải).

Ta gọi một cách di chuyển từ mép trái sang mép phải của lưới là cách di chuyển bắt đầu từ một ô có tọa độ cột bằng $1$ qua các ô của lưới theo qui tắc di chuyển đã nêu và kết thúc ở một ô có tọa độ cột bằng $n$.

**Yêu cầu:** Tính số cách di chuyển từ mép trái lưới sang mép phải lưới.

## Dữ liệu vào:
- Dòng đầu gồm hai số nguyên dương $m$ và $n$ được ghi cách nhau một dấu cách.
- $m$ dòng tiếp theo, dòng thứ $i$ chứa $n$ số nguyên dương $a_{i1}, a_{i2}, …, a_{in}$, hai số liên tiếp được ghi cách nhau một dấu cách.

## Dữ liệu ra:
- Một số nguyên dương duy nhất là số cách di chuyển từ mép trái lưới sang mép phải lưới (do số này có thể rất lớn nên chỉ lấy phần nguyên khi chia cho `1000000007`).

## Ví dụ:
#### Dữ liệu vào:
```
2 2
2 4
6 8
```

#### Dữ liệu ra:
```
4
```

#### Giải thích:
Các cách đi là:
- Cách $1: (1, 1)→(1, 2)$
- Cách $2: (1, 1)→(1, 2) →(2, 2)$
- Cách $3: (2, 1) →(2, 2)$
- Cách $4: (1, 1)→(2, 1) →(2, 2)$

## Giới hạn:
- $1 < m, n ≤ 100; 1≤ a_{ij} ≤ 30000$.