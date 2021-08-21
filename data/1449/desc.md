<!--**<center>NGUỒN: ĐỀ THI THỬ VOI 2015 3HB (Hải phòng - Hải Dương - Hưng Yên - Bắc Giang)</center>**-->

Cho dãy ~a_i~ được xác định bởi ~4~ giá trị ~(a_0,X,Y,M)~ như sau:
- ~a_0 ~là số nguyên dương cho trước;
- ~a_i=(X×a_{i-1}+Y)\text{ mod }M, ∀i≥1~.

**Yêu cầu:** Bạn hãy trả lời ~Q~ câu hỏi, câu hỏi ~i~ có dạng ~p_i~ yêu cầu bạn cho biết giá trị ~a_{p_i}~.

## Dữ liệu vào:
- Dòng đầu chứa ~5~ số nguyên theo thứ tự ~a_0,X,Y,M,Q\ (0< M≤2×10^{6};0< a_0,X,Y< M;1≤Q≤10^3)~;
- ~Q~ dòng tiếp theo, dòng thứ ~i~ chứ một số nguyên ~p_i\ (0≤p_i≤10^{10000})~.

Các số trên một dòng được ghi cách nhau bởi dấu cách.

## Dữ liệu ra:
- Ghi ra ~Q~ số trên cùng một dòng, số thứ ~i~ tương ứng với giá trị ~a_{p_i}~.

Các số trên một dòng được ghi cách nhau bởi ít nhất một dấu cách.

## Ví dụ:
#### Dữ liệu vào:
```
7 5 21 23 5
0
1
2
3
4
```

#### Dữ liệu ra:
```
7 10 2 8 15
```

#### Giải thích:
- Dãy ~A = \{7; 10; 2; 8; 15;…\}~.

## Giới hạn:
- ~30\%~ số điểm tương ứng với ~p_i≤10^{18};M≤3000~;
- ~20\%~ số điểm tiếp theo tương ứng với ~p_i≤10^{18};M×Q≤10^7~;
- ~20\%~ số điểm tiếp theo tương ứng với ~p_i≤10^{18}~;
- ~30\%~ số điểm còn lại không có ràng buộc bổ sung.
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)