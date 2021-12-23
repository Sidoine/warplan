FROM mcr.microsoft.com/dotnet/sdk:6.0
RUN apt-get update -y
RUN curl -sL https://deb.nodesource.com/setup_16.x | bash -
RUN apt-get install -y nodejs
RUN corepack enable 
WORKDIR /app/warplan
COPY warplan/yarn.lock .
COPY warplan/package.json .
RUN yarn install

WORKDIR /app
COPY Warplan.csproj .
RUN dotnet restore Warplan.csproj

WORKDIR /app
COPY . .
RUN dotnet publish -c Release -o /output
WORKDIR /output
COPY nginx.conf.sigil .
ENTRYPOINT [ "dotnet", "Warplan.dll"]
