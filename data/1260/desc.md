**<center>NGUỒN: Bài tập Đội Bắc Giang ôn thầy Đỗ Đức Đông - Tháng 10/2017</center>**

Khoảng cách hai xâu ~𝑋, 𝑌~ được tính bằng
~~𝑑(𝑋, 𝑌) = \sum_{i=1}^𝑚 |𝑥_𝑖 − 𝑦_𝑖|~~
trong đó ~𝑥_𝑖, 𝑦_𝑖~ là thứ tự của ký tự ~𝑋_𝑖, 𝑌_𝑖~ trong bảng mã. Với hai xâu ~𝐴~, ~𝐵~ và ~𝑛~ xâu ~𝑆_1, 𝑆_2, \dots, 𝑆_𝑛~, ta định nghĩa khoảng cách của hai xâu ~𝐴, 𝐵~ với ~𝑛~ xâu là:
~~𝐷𝐴𝐵𝑆𝑡𝑟(𝐴, 𝐵, 𝑆_1, 𝑆_2, \dots, 𝑆_𝑛) = \sum_{i=1}^n min\{𝑑(𝐴, 𝑆_𝑖), 𝑑(𝐵, 𝑆_𝑖)\}~~

**Yêu cầu:** Cho ~𝑛~ xâu ~𝑆_1, 𝑆_2, \dots, 𝑆_𝑛~ có cùng độ dài và chỉ chứa các ký tự từ ‘0’ đến ‘9’, hãy tìm hai xâu ~𝐴~, ~𝐵~ để ~𝐷𝐴𝐵𝑆𝑡𝑟(𝐴, 𝐵, 𝑆_1, 𝑆_2, \dots, 𝑆_𝑛)~ đạt giá trị nhỏ nhất.

## Dữ liệu vào:
- Dòng đầu chứa số nguyên ~𝑛\ ⁡(𝑛 ≤ 20)~; 
- ~𝑛~ dòng tiếp theo, dòng thứ ~𝑖~ chứa xâu ~𝑆_𝑖~.

## Dữ liệu ra:
- Gồm một dòng chứa một số nguyên là giá trị ~𝐷𝐴𝐵𝑆𝑡𝑟(𝐴, 𝐵, 𝑆_1, 𝑆_2, \dots, 𝑆_𝑛)~ nhỏ nhất tìm được.

## Ví dụ:
#### Dữ liệu vào:
```3 
00000 
11111 
00001
```

#### Dữ liệu ra:
```
1
```

## Giới hạn:
- **Subtask** ~\#1~: độ dài các xâu ~𝑆_𝑖~ không vượt quá ~10~, xâu chỉ chứa ký tự ‘0’, ‘1’;
- **Subtask** ~\#2~: độ dài các xâu ~𝑆_𝑖~ không vượt quá ~30~.
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)