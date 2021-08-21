**<center>Nguồn:  Free Contest 04</center>**
**[Nguồn bài](http://www.spoj.com/problems/FORMAT1/)**

Các con bò đang gặm cỏ trên một cánh đồng gồm $m$ hàng và $n$ cột. Có $k$ loại bò, mỗi con bò thuộc chính xác một ô của cánh đồng. Hai hàng được gọi là giống nhau nếu với tất cả các loại bò, loại bò nào cũng xuất hiện ở hai hàng với số lượng như nhau. Một cánh đồng đẹp là một cánh đồng không có bất cứ hai hàng nào giống nhau.

Nhiệm vụ của bạn là tính số lượng cánh đồng đẹp trong mô đun $10^9+7$.

## Dữ liệu vào:
- Input gồm nhiều test, mỗi test gồm một dòng ghi ba số $m, n, k\ (1 ≤ m ≤ 10, 1 ≤ n ≤ 50, 1 ≤ k ≤ 100)$.

## Dữ liệu ra:
- Với mỗi test, in ra số lượng cánh đồng đẹp trong mô đun $10^9+7$.

## Ví dụ:
#### Dữ liệu vào:
```
2 2 2
1 1 58
5 3 2
3 5 7
```

#### Dữ liệu ra:
```
10
58
0
894953467
```