**<center>Nguồn: Đề ôn ĐTQG - Lương Văn Tụy - Ninh Bình</center>**

Cho dãy số nguyên $a_1,a_2,..,a_n$. Một dãy con là dãy được lập từ dãy đã cho bằng cách giữ lại một đoạn liên tiếp các số cạnh nhau. Giá trị của một dãy được tính bằng giá trị của phần tử lớn nhất trong dãy.

Viết chương trình xác định với mỗi truy vấn dạng $L,R$ hãy đếm xem có bao nhiêu dãy con của dãy đã cho có giá trị nằm trong đoạn $[L,R]$?

## Dữ liệu vào:
- Dòng đầu tiên chứa số nguyên dương $n ≤ 10^6$;
- Dòng thứ hai chứa $n$ số nguyên dương $a_1, a_2,…, a_n\ (a_i ≤ 10^9)$ mỗi số cách nhau bởi ít nhất một dấu cách;
- Dòng thứ ba ghi số nguyên dương $m ≤ 10^6$ - số lượng truy vấn;
- $m$ dòng cuối cùng, mỗi dòng chứa hai số nguyên $L, R\ (1 ≤ L ≤ R ≤ 10^9)$ - mô tả một truy vấn đếm xem có bao nhiêu dãy con có giá trị nằm trong $[L,R]$?

## Dữ liệu ra:
- Gồm $m$ dòng, mỗi dòng ghi kết quả một truy vấn theo thứ tự xuất hiện trong dữ liệu vào.

## Ví dụ:
### Dữ liệu vào:
```
3
1 2 3
3
1 2
2 3
3 3
```

### Dữ liệu ra:
```
3
5
3
```

## Ràng buộc:
- Có $50\%$ số điểm ứng với $n, m≤ 1000$;
- Có $50\%$ số điểm còn lại ứng với $n, m≤ 10^6$.