**<center>Nguồn:  Free Contest 04</center>**
***<center>NEERC 2004-2005</center>***

Georgie đang thử nghiệm một phần mềm sinh số ngẫu nhiên, sẽ sinh ra một số nguyên trong khoảng ~[0,m – 1]~. Georgie “nghĩ” rằng, việc thêm 
nhiều biến số sẽ khiến tăng tính ngẫu nhiên, do đó, anh đề xuất thuật toán sau:
1. Georgie chọn một số nguyên ~n~ và sinh ngẫu nhiên một dãy số ~A =\{a_1,…,a_n\}~, các số nằm trong khoảng ~[0,m – 1]~
2. Georgie tạo ra một dãy số ~B~ bằng cách lấy tổng ~2~ phần từ liên tiếp trong ~A~. Cụ thể hơn, ~B~ sẽ có dạng ~\{a_1 + a_2,a_2 + a_3,…,a_{n– 1} +a_n\}~
3. Georgie lặp lại thao tác đó với dãy ~B, C~, .., cho đến khi chỉ còn lại một phần tử
4. Lấy phần dư của phần tử này trong phép chia cho ~m~. Gọi đáp số thu được là ~X~.

Có một điểm yếu trong thuật toán này: ~X~ có thể hoàn toàn không phụ thuộc vào giá trị ban đầu của một số phần tử ~a_i~. Ví dụ, với ~n = 3~ và 
~m = 2~, bất kể giá trị ban đầu của ~a_2~ như thế nào, ~X~ cũng không thay đổi.

Cho hai số nguyên ~n~ và ~m~, hãy giúp Georgie xác định tất cả các phần tử không xác định như đã nêu trên.

## Dữ liệu vào:
- Gồm một dòng duy nhất chứa hai số nguyên ~n~ và ~m\ (0 < n ≤ 10^5, 2 ≤ m ≤ 10^9)~.

## Dữ liệu ra:
- Dòng đầu ghi số lượng phần tử không xác định;
- Dòng thứ hai ghi chỉ số các phần tử không xác định theo thứ tự tăng dần.

## Ví dụ:
#### Dữ liệu vào:
```
3 2
```

#### Dữ liệu ra:
```
1
2
```
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)