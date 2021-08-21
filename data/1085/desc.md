**<center>NGUỒN: ĐỀ THI LẬP ĐỘI TUYỂN HỌC SINH GIỎI CỦA TỈNH DỰ THI CHỌN HỌC SINH GIỎI QUỐC GIA THPT NĂM 2020 TỈNH QUẢNG NINH</center>**
<br>

Thắng thích làm những bài toán liên quan đến truy vấn với các con số. Một hôm Thắng tìm được một bài toán mới mà anh ta cho rằng khá khó để giải quyết. Do đó, anh ta nhờ bạn giúp!
Cho một dãy số nguyên ~a_1, a_2, ..., a_n~ và ~q~ truy vấn ~(1 ≤ n, q ≤ 5.10^4; 1 ≤ a_i ≤ 10^5)~. Có ~2~ loại truy vấn sau:
- ~1\ x\ y~: Gán ~a_x = y~ (~1 ≤ x ≤ n, 1 ≤ y ≤ 10^5, x,y~ là số nguyên); 
- ~2\ l\ r\ g~: Đếm các chỉ số ~i~ sao cho ~l ≤ i ≤ r~ và ~gcd(a_i, g) = 1~ (~1 ≤ l ≤ r ≤ n, 1 ≤ g ≤ 10^5, l,r,g~ là các số nguyên). Kí hiệu ~gcd(a_i, g)~ là ước chung lớn nhất của ~a_i~ và ~g~.
Hãy đưa ra câu trả lời cho mỗi truy vấn loại ~2~.

## Dữ liệu vào:
- Dòng đầu tiên chứa số nguyên ~n~ là số phần tử của dãy. 
- Dòng thứ hai chứa ~n~ số nguyên ~a_1, a_2, ..., a_n~. 
- Dòng thứ ba chứa số nguyên ~q~ là số truy vấn. 
- Mỗi dòng trong ~q~ dòng tiếp theo chứa một truy vấn thuộc ~2~ dạng như mô tả ở trên.

## Dữ liệu ra:
- Với mỗi truy vấn loại ~2~, ghi ra trên một dòng chứa một số nguyên là câu trả lời của truy vấn đó.

## Ví dụ:
#### Dữ liệu vào:
```
4
2 3 4 5
3
2 1 4 2
1 2 6
2 1 4 2
```

#### Dữ liệu ra:
```
2
1
```

#### Giải thích:
- Với truy vấn đầu tiên: ~gcd(a_1, 2) = 2, gcd(a_2, 2) = 1,  gcd(a_3, 2) = 2\text{ và }gcd(a_4, 2) = 1~, do đó câu trả lời là ~2~.
- Với truy vấn thứ ba: chỉ có ~gcd(a_4, 2) = 1~, do đó câu trả lời là ~1~.

## Giới hạn:
- Có ~30\%~ số test có ~1 ≤ n,q ≤ 10^3~;
- Có ~30\%~ số test khác chỉ gồm các truy vấn loại ~2, 1 ≤ n,q ≤ 5.10^4~;
- Có ~40\%~ test còn lại: Như ràng buộc trong đề bài.
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)