**<center>NGUỒN: ĐỀ THI CHỌN HỌC SINH GIỎI THPT CẤP TỈNH - NĂM HỌC 2019 – 2020</center>**

Phú ông có rất nhiều ngọc quý, các hạt ngọc được chia làm ~26~ loại khác nhau được đại diện bởi ~26~ ký tự la-tin thường (từ `a` đến `z`). Phú ông đem kết các hạt ngọc thành những vòng ngọc, mỗi vòng có ~N~ hạt ngọc.

Một hôm, Phú ông đem các vòng ngọc của mình ra để đổi lấy quạt mo của Bờm. Phú ông đưa cho Bờm một vòng ngọc làm mẫu được biểu diễn bởi một xâu ký tự ~S~ độ dài ~N~ và ~K~ chuỗi ngọc đánh số từ ~1~ đến ~K~, chuỗi ngọc thứ ~i~ Phú ông đã cắt ra từ ~1~ vòng ngọc ở một vị trí nào đó và được biểu diễn bởi xâu ký tự ~S_i~. Phú ông sẽ cho Bờm các chuỗi ngọc nếu Bờm tìm được đúng những chuỗi ngọc được cắt ra từ vòng ngọc giống với vòng ngọc mẫu ~S~.

**Yêu cầu:** Cho biết ~N,K~, chuỗi ký tự ~S~ và ~K~ chuỗi ký tự ~S_1,S_2,…,S_K~. Hãy giúp Bờm tìm xem trong các chuỗi ngọc ~S_1,S_2,…,S_K~, chuỗi nào được cắt ra từ vòng ngọc giống với mẫu ~S~.

## Dữ liệu vào:
- Dòng đầu chứa hai số nguyên dương ~N,K~ được ghi cách nhau một dấu cách;
- Dòng thứ hai chứa chuỗi ký tự ~S~;
- ~K~ dòng tiếp theo, dòng thứ ~i~ chứa chuỗi ký tự ~S_i~.

## Dữ liệu ra:
- Ghi ra ~K~ dòng, dòng thứ ~i~ là `YES` nếu chuỗi ngọc thứ ~i~ được cắt ra từ vòng ngọc giống với mẫu ~S~, ngược lại ghi ra `NO`.

## Ví dụ:
#### Dữ liệu vào:
```
5 4
abcde
abcde
bcdea
cbaed
cdeab
```

#### Dữ liệu ra:
```
YES
YES
NO
YES
```

## Giới hạn:
- ~70\%~ số điểm của bài có ~1≤N≤500;1≤K≤10~;
- ~30\%~ số điểm còn lại có ~500<N≤10^5;1≤K≤10~.
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)