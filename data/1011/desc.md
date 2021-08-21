**<center>NGUỒN: CONTEST PRACTICE VNOI20  (WEEK 2 - T11/2019)</center>**
<br>

Cho một dãy số nguyên gồm ~N~ phần tử ~a_1,a_2,…,a_N~. Gọi ~f(A)~ là giá trị của dãy con liên tiếp có tổng lớn nhất của dãy ~A~. Ví dụ: ~A=(5,-1,2,-3)→f(A)=5+(-1)+2=6~. 

**Yêu cầu**: Cho một số nguyên ~x~, hãy tìm cách tăng mỗi phần tử trong **tối đa một dãy con liên tiếp** của dãy ~A~ lên ~x~ lần sao cho ~f(A)~ lớn nhất có thể.

## Dữ liệu vào:
- Dòng đầu tiên chứa số hai số nguyên ~N~ và ~x\ (N≥1,|x|≤100)~
- Dòng thứ hai chứa ~N~ số nguyên ~a_1,a_2,…,a_N\  (|a_i |≤100)~

## Dữ liệu ra:
- In ra trên một dòng giá trị lớn nhất của ~f(A)~

## Ví dụ:
#### Dữ liệu vào:
```
5 2
5 -1 2 -3 2
```

#### Dữ liệu ra:
```
12
```

#### Giải thích:
- Ta nhân ~a_1~ với ~x~, tức là ~a_1=a_1×2=5×2=10~. Khi đó thì ~A=(10,-2,4,-3,2)→f(A)=10+(-2)+4=12~

## Giới hạn:
- ~30\%~ số test có ~N≤50~
- ~30\%~ số test khác có ~N≤2000~
- ~40\%~ số test còn lại có ~N≤3.10^5~