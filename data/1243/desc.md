**<center>Nguồn: Thầy Thuận, Tập huấn đội tuyển Quảng Ninh, HÀ NỘI, 15/11/2016</center>**

Ông vua ở một vương quốc nọ có $n$ kho vàng nằm trên một đường thẳng được đánh số theo thứ tự là $1, 2, …, n$, trong đó kho vàng $i$ có trữ lượng vàng là $a_i$ ($a_i$ là số nguyên không âm) và đặt tại toạ độ $i\ (∀i = 1, . . . , n)$. Nhà vua mở cuộc thi tài cho những người tìm vàng xem ai là người có thể lựa chọn được dãy các kho vàng có tổng trữ lượng lớn nhất với điều kiện khoảng cách giữa $2$ kho liên tiếp trong dãy các kho được chọn ra phải lớn hơn hoặc bằng $L_1$ và nhỏ hơn hoặc bằng $L_2$ , nghĩa là, nếu dãy kho được chọn là $i_1, i_2, …. , i_k\ (i_1 < i_2 < . . . < i_k)$, thì ta phải có $L_1 ≤ i_j − i_{j−1} ≤ L_2, j = 2, 3, … , k$.

## Dữ liệu vào:
- Dòng đầu ghi giá trị $n, L_1, L_2$ cách nhau bởi dấu cách $(1 ≤ n ≤ 10^6, 1 ≤ L_1 ≤ L_2 ≤ n)$;
- Dòng thứ hai ghi $n$ giá trị nguyên $a_1, a_2, … , a_n$ cách nhau bởi dấu cách.

## Dữ liệu ra:
- Ghi ra duy nhất một số là tổng trữ lượng của các kho vàng được lựa chọn.

## Ví dụ:
#### Dữ liệu vào:
```
6 2 2
3 5 9 6 7 4
```

#### Dữ liệu ra:
```
19
```

#### Giải thích:
- Phương án tối ưu là lựa chọn dãy $3$ kho vàng $1, 3$ và $5$ với tổng dự trữ là $3 + 9 + 7 = 19$.