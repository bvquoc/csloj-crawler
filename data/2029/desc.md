**<center>Nguồn:  Free Contest 05</center>**

***<center>PA 2013</center>***

Bajtek đến sòng bạc và bị cuốn hút bởi trò máy quay số. Bộ phận quan trọng nhất của cỗ máy là $3$ trống quay tròn. Mỗi trống quay được chia thành $N$ phần bằng nhau và mỗi phần được in vào đó những biểu tượng khác nhau. Có đúng $n$ biểu tượng, mỗi biểu tượng xuất hiện đúng một lần trên mỗi trống quay. Để đơn giản, chúng ta biểu diễn các biểu tượng bằng các số từ $1$ đến $N$. Hình sau minh họa $3$ trống quay với $n = 5$.
<center><img src="/images/problems/2029/bandyta.png" width=250px></center>

Sau khi nhấn nút, mỗi trống sẽ độc lập quay. Sau khi các trống dừng quay, kết quả của người chơi phụ thuộc vào số lượng các hàng ngang có cả $3$ biểu tượng cùng màu. Hãy giúp Bajtek xác định số lượng hàng tối đa như vậy.

## Dữ liệu vào:
- Dòng đầu tiên ghi số nguyên $N$ là số lượng biểu tượng $(1 ≤ N ≤ 300000)$;
- Ba dòng tiếp theo, mỗi dòng mô tả các biểu tượng được in trên mỗi trống quay. Mỗi dòng có dạng $a_1, a_2, ..., a_N\ (1 ≤ a_i ≤ N)$, các số này phân biệt.

## Dữ liệu ra:
- In ra số lượng dòng tối đa có ba biểu tượng giống nhau.

## Ví dụ:
#### Dữ liệu vào:
```
5
1 5 4 3 2
1 3 2 4 5
2 1 5 4 3
```

#### Dữ liệu ra:
```
3
```

#### Giái thích:
- Trống $1$ quay lên $3$ vị trí, trống $2$ quay lên $1$ vị trí, trống $3$ quay xuống $1$ vị trí.