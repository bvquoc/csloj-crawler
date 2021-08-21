**<center>NGUỒN : VNU-OI 2020</center>**

Cho một hoán vị $p$ (chỉ số bắt đầu từ $0$) của $n$ số tự nhiên đầu tiên. Lúc đầu, $p_i = i\ (0 ≤ i < n)$. Bạn cần lần lượt thực hiện $q$ thao tác, mỗi thao tác có một trong hai dạng sau:
- $R\ l\ r\ (0 ≤ l ≤ r < n)$: Đảo ngược đoạn con liên tiếp từ chỉ số $l$ đến chỉ số $r$ của $p\ (p_l, p_{l+1},…, p_r → p_r, p_{r-1},…, p_l)$;
- $S\ l\ r\ a\ (0 ≤ l ≤ a ≤ r < n)$: Dịch đoạn con liên tiếp từ chỉ số $l$ đến chỉ số $r$ của $p$ theo vòng tròn sao cho $p_l$ sau khi thực hiện thao tác bằng $p_a$ trước khi thực hiện thao tác $(p_l, p_{l+1},…, p_r → p_a, p_{a+1}, …, p_r, p_l, …, p_{a-1})$.

Sau mỗi thao tác, hãy tìm số cặp nghịch thế (số cặp chỉ số $(i, j)$ thỏa mãn $0 ≤ i < j < n$ và $p_i > p_j$).

## Dữ liệu vào:
- Dòng đầu tiên chứa hai số nguyên $n, q\ (1 ≤ n,q ≤ 10^6)$;
- $q$ dòng tiếp theo, mỗi dòng là một trong hai dạng thao tác đã được miêu tả ở trên.

## Dữ liệu ra:
- Sau mỗi thao tác, hãy in ra trên một dòng riêng biệt số cặp nghịch thế của $p$ hiện tại theo modulo $2$.

## Ví dụ:
#### Dữ liệu vào:
```
2 3
S 1 1 1
R 0 1
R 0 0
```

#### Dữ liệu ra:
```
0
1
1
```

#### Dữ liệu vào:
```
2 3
R 0 1
S 0 1 0
R 1 1
```

#### Dữ liệu ra:
```
1
1
1
```

## Giới hạn:
- $25\%$ số điểm: $n, q ≤ 1000$;
- $25\%$ số điểm khác: $n, q ≤ 10^5$;
- $50\%$ số điểm còn lại: Không có ràng buộc gì thêm.