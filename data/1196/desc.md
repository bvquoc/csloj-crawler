**<center>Nguồn: Ôn Thầy Hiếu Hưng Yên - T11/2019</center>**

Trên đường đi khảo sát đoàn thám hiểm phải vượt qua một cây cầu đá bắc qua miệng núi lửa. Cây cầu gồm $2$ dãy phiến đá - dãy Ác quỷ và dãy Thiên thần.
<center><img src="/images/problems/1195/bridge1.svg" width=300px ></center>

**Hình 1** nêu ví dụ về một cầu độ dài $6$. Dãy trên là dãy phiến đá Ác quỷ và dãy dưới là dãy phiến đá thiên thần. Hai dãy phiến đá có độ dài như nhau. Từng cặp phiến đá Ác  quỷ và Thiên thần được gắn với nhau tạo thành một tấm lát, tương ứng với một cột trên hình vẽ. Trên mỗi phiến đã có khắc một ký tự trong tập {R, I, N, G, S}.

Đoàn thám hiểm phải đi từ bờ trái sang bờ phải. Để vượt cầu, cần phải lần lượt dẫm  lên các tảng đã theo một hướng dẫn cho trước dưới dạng một xâu ký tự. Nếu đi sai, cầu sẽ sập xuống núi lửa phía dưới. Ngoài ra phải bảo đảm các qui tắc sau:
- Các ký tự trên những phiến đá được dẫm ghi theo trình tự bước tạo thành xâu hướng dẫn;
- Phải bước đan xen giữa các phiến đá Ác quỷ và Thiên thần bắt đầu từ loại nào không quan trọng.
- Luôn tiến sang các tấm lát bên phải, độ lớn của mỗi bước đi (số tấm lát giữa hai lần bước liên tiếp) là không quan trọng.

**Ví dụ:** với cầu ở **hình 1** và hướng dẫn 'RGS' **hình 2**, nêu các cách vượt cầu và **hình 3** nêu các cách vượt cầu sai:
<center><img src="/images/problems/1195/bridge2.svg" width=700px ></center>

**Yêu cầu:** Cho mô tả cầu và hướng dẫn đi. Hãy xác định số cách vượt cầu.

## Dữ liệu vào:
- Dòng đầu tiên chứa xâu hướng dẫn;
- Dòng thứ hai chứa xâu $SA$ mô tả các phiến đã Ác quỷ $(5≤|SA|≤100)$;
- Dòng thứ ba chứa xâu mô tả các phiến đá Thiên thần.

## Dữ liệu ra:
- Ghi ra một số nguyên duy nhất là số lượng cách vượt $(\text{mod }1000000007)$

## Ví dụ:
### Dữ liệu vào:
```
RGS
RINGSR
GRGGNS
```

### Dữ liệu ra:
```
3
```