**<center>Nguồn:  Free Contest 04</center>**
***<center>USACO 2010/03</center>***

Cánh đồng của nông dân John là một địa điểm có ~N~ đồng cỏ, được nối với nhau bằng ~N – 1~ con đường. Các con đường đảm bảo từ ~1~ đồng cỏ 
luôn có cách di chuyển tới các đồng cỏ còn lại. Mỗi con đường có một độ dài nhất định.

Lễ hội sắp đến và đàn bò của nông dân John chuẩn bị gặp nhau! Tại đồng cỏ thứ ~i~ hiện có ~c_i~ con bò. Chúng sẽ gặp nhau tại một đồng cỏ duy nhất đang được lựa chọn. Hãy chọn phương án sao cho tổng khoảng cách di chuyển của các con bò là nhỏ nhất.

## Dữ liệu vào:
- Dòng đầu chứa một số nguyên dương ~N\ (0 < N ≤ 10^5)~;
- ~N~ dòng sau, mỗi dòng chứa một số nguyên ~c_i\ (0 ≤ c_i≤ 1000)~ là số con bò đang có trên đồng cỏ tương ứng
- ~N-1~ dòng tiếp theo, mỗi dòng chứa ba số nguyên ~a_i,b_i,d_i~ mô tả một con đường nối hai đồng cỏ ~a_i~ với ~b_i~, có độ dài ~d_i~ ~(0 < d_i ≤1000)~.

## Dữ liệu ra:
-Một số nguyên duy nhất là tổng khoảng cách di chuyển nhỏ nhất trong tình huống tối ưu.

## Ví dụ:
#### Dữ liệu vào:
```
5
1
1
0
0
2
1 3 1
2 3 2
3 4 3
4 5 3
```

#### Dữ liệu ra:
```
15
```

#### Giải thích:
Địa điểm tối ưu là đồng cỏ số ~3~. Khi đó
- Con bò ở đồng cỏ ~1~ di chuyển quãng đường ~1~
- Con bò ở đồng cỏ ~2~ di chuyển quãng đường ~2~
- Con bò ở đồng cỏ ~5~ di chuyển quãng đường ~6~
- Tổng khoảng cách: ~1.1 + 2.1 + 6.2 = 15~

(Đồng cỏ ~4~ và ~5~ cũng cho kết quả tối ưu tương tự)