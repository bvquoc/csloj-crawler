<!--
**<center>NGUỒN: Hội thảo Duyên Hải 2016 - Lê Thanh Bình</center>**
-->

Cho đơn đồ thị vô hướng $𝑁$ đỉnh, $𝑀$ cạnh, các đỉnh đánh số $1,2 … , 𝑁$. Đếm số cặp đỉnh $(𝑢, 𝑣)$ thỏa mãn: giữa $𝑢, 𝑣$ không có cạnh nối trực tiếp và nếu thêm cạnh nối $𝑢, 𝑣$ thì đồ thị xuất hiện thêm đúng một chu trình đơn.

## Dữ liệu vào:
- Dòng đầu ghi hai số nguyên $𝑁, 𝑀\ (1 ≤ 𝑁, 𝑀 ≤ 10^5)$;
- $M$ dòng tiếp theo, mỗi dòng hai số nguyên $𝑢, 𝑣$ thể hiện một cạnh nối hai đỉnh $𝑢, 𝑣$.

## Dữ liệu ra:
- Một dòng duy nhất ghi số nguyên là số cặp đỉnh thỏa mãn yêu cầu bài toán, chú ý rằng các cặp đỉnh chỉ khác nhau về thứ tự đỉnh chỉ được tính là một cặp.

## Ví dụ:
#### Dữ liệu vào:
```
5 5
1 2
2 3
3 1
1 4
4 5
```

#### Dữ liệu ra:
```
1
```